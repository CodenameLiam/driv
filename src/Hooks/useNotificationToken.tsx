import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';
import API from 'API/API';

const saveTokenToDatabase = async (notificationToken: string): Promise<void> => {
	try {
		const uid = auth().currentUser?.uid;
		if (notificationToken && uid) {
			API.users.token(uid, notificationToken);
		}
	} catch (error) {
		console.warn(error);
	}
};

const useNotificationToken = (): void => {
	useEffect(() => {
		messaging()
			.getToken()
			.then(token => {
				return saveTokenToDatabase(token);
			});

		return messaging().onTokenRefresh(token => {
			saveTokenToDatabase(token);
		});
	}, []);
};

export default useNotificationToken;
