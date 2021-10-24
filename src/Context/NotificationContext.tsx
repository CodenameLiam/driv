import API from 'API/API';
import React, { createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState } from 'react';
import { Notification } from 'Types/Notifications';
import auth from '@react-native-firebase/auth';
import useNotificationToken from 'Hooks/useNotificationToken';

interface NotificationContextState {
	notifications: [Notification[], Dispatch<SetStateAction<Notification[]>>];
}

const DEFAULT: NotificationContextState = {
	notifications: [[], () => {}],
};

export const NotificationContext = createContext<NotificationContextState>(DEFAULT);

const NotificationContextProvider: FC = ({ children }) => {
	useNotificationToken();
	const [notifications, setNotifications] = useState<Notification[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const uid = auth().currentUser?.uid;
				if (uid) {
					const _notifications: Notification[] = [];
					const notificationsRef = await API.notifications.get(uid);
					notificationsRef.forEach(doc => {
						_notifications.push({ ...(doc.data() as Notification), id: doc.id });
					});
					setNotifications(_notifications);
				}
			} catch (error) {
				console.warn((error as Error).message);
			}
		})();
	}, []);

	return (
		<NotificationContext.Provider
			value={{
				notifications: [notifications, setNotifications],
			}}
		>
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationContextProvider;

export const useNotifications = (): [Notification[], Dispatch<SetStateAction<Notification[]>>] => {
	return useContext(NotificationContext).notifications;
};
