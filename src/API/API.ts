import firestore from '@react-native-firebase/firestore';
import { InteractionDate, InteractionSubType, InteractionType } from 'Types/Interaction';
import Geolocation from 'react-native-geolocation-service';
import { geohashForLocation, geohashQueryBounds, distanceBetween } from 'geofire-common';
import moment, { Moment } from 'moment';
import { RewardObject } from 'Types/Rewards';
import { UserData } from 'Types/User';

const usersRef = firestore().collection('users');
const rewardsRef = firestore().collection('rewards');
const interactionsRef = firestore().collection('interactions');

const users = {
	get: (uid: string) => usersRef.doc(uid).get(),
	set: (uid: string, rego: string) => usersRef.doc(uid).set({ rego, rank: 5 }),
};

const rewards = {
	get: async () => {
		const _rewards: RewardObject[] = [];
		const docsRef = await rewardsRef.get();
		docsRef.forEach(reward => {
			_rewards.push(reward.data() as RewardObject);
		});
		return _rewards;
	},
};

const intereactions = {
	get: (rego: string) => interactionsRef.where('rego', '==', rego).orderBy('date', 'desc').get(),
	getByDate: (rego: string, date: Date) => interactionsRef.where('rego', '==', rego).where('date', '>=', date).get(),
	getByLocation: async (date: Moment, position: Geolocation.GeoPosition) => {
		const { latitude, longitude } = position.coords;
		const radiusInM = 5 * 1000;
		const bounds = geohashQueryBounds([latitude, longitude], radiusInM);

		const matchingDocs = [];
		for (const b of bounds) {
			const docRef = await interactionsRef.orderBy('hash').startAt(b[0]).endAt(b[1]).get();
			for (const doc of docRef.docs) {
				const interationDate = doc.get('date') as InteractionDate;
				if (moment(interationDate.seconds * 1000).format('L') === date.format('L')) {
					const lat = doc.get('latitude');
					const lng = doc.get('longitude');
					if (lat && lng) {
						const distanceInKm = distanceBetween([lat as number, lng as number], [latitude, longitude]);
						const distanceInM = distanceInKm * 1000;
						if (distanceInM <= radiusInM) {
							matchingDocs.push(doc.data());
						}
					}
				}
			}
		}

		return matchingDocs;
	},
	set: async (
		rego: string,
		date: Date,
		type: InteractionType,
		subType: InteractionSubType,
		position?: Geolocation.GeoPosition,
	) => {
		if (position) {
			const { latitude, longitude } = position.coords;
			const hash = geohashForLocation([latitude, longitude]);
			interactionsRef.doc().set({ rego, date, type, subType, latitude, longitude, hash });
		} else {
			interactionsRef.doc().set({ rego, date, type, subType });
		}
	},
	rank: async (rego: string, deductions: number) => {
		const userSnaps = await usersRef.where('rego', '==', rego).get();
		userSnaps.forEach(user => {
			if (user.exists) {
				const userData: UserData = user.data();
				if (userData.rank) {
					console.log(`Removing ${deductions} points from ${user.id}`);
					usersRef.doc(user.id).update({ rank: Math.max(0, userData.rank - deductions) });
				} else {
					usersRef.doc(user.id).update({ rank: Math.max(0, 5 - deductions) });
				}
			}
		});
	},
};

const API = {
	users,
	rewards,
	intereactions,
};

export default API;
