const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
// 	functions.logger.info('Hello logs!', { structuredData: true });
// 	response.send('Hello from Firebase!');
// });

exports.scheduledUserRank = functions.pubsub.schedule('0 0 * * *').onRun(async context => {
	const userSnapshots = await admin.firestore().collection('users').get();
	userSnapshots.forEach(async userSnap => {
		const data = userSnap.data();

		if (data.rank) {
			await admin
				.firestore()
				.collection('users')
				.doc(userSnap.id)
				.update({ rank: Math.min(5, data.rank + 0.1) });
		} else {
			await admin.firestore().collection('users').doc(userSnap.id).update({ rank: 5 });
		}

		console.log('User rank updated');
		return null;
	});
});

const minorMessage =
	'We are contacting you as you have received three or more negative interactions today. Make sure are you driving carefully and respectfully!';
const severeMessage =
	"We are contacting you as you have received a severe negative interaction. You need to ensure that you're being safe on the road!";

exports.sendNotification = functions.https.onCall(async (data, context) => {
	const { rego, type } = data;

	const today = new Date();
	today.setDate(today.getDate() - 1);

	const userSnaps = await admin.firestore().collection('users').where('rego', '==', rego).get();
	const regoSnaps = await admin
		.firestore()
		.collection('interactions')
		.where('rego', '==', rego)
		.where('date', '>=', today)
		.get();

	const minorInteractions = regoSnaps.docs.length;
	const payload = {
		notification: {
			title: 'Warning',
			body: type === 'severe' ? severeMessage : minorMessage,
		},
	};

	userSnaps.forEach(user => {
		const userData = user.data();
		if (userData.notificationToken) {
			if (type === 'severe' || minorInteractions >= 3) {
				admin
					.firestore()
					.collection('notifications')
					.doc()
					.set({
						user: user.id,
						text: type === 'severe' ? severeMessage : minorMessage,
						read: false,
						date: new Date(),
					});
				admin.messaging().sendToDevice(userData.notificationToken, payload);
			}
		}
	});
});
