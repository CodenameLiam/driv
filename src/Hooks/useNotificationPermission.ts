import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';

const useNotificationPermission = (): void => {
	useEffect(() => {
		(async () => {
			const authStatus = await messaging().requestPermission();
			const enabled =
				authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
				authStatus === messaging.AuthorizationStatus.PROVISIONAL;

			if (enabled) {
				console.log('Authorization status:', authStatus);
				const token = await messaging().getToken();
				console.log(token);
			}
		})();
	}, []);
};

export default useNotificationPermission;
