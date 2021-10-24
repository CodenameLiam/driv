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
