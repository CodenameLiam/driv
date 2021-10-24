import API from 'API/API';
import { useNotifications } from 'Context/NotificationContext';
import moment from 'moment';
import React, { FC, useEffect } from 'react';
import { SafeAreaView, FlatList, Platform, StatusBar } from 'react-native';
import Colours from 'Theme/Colours';
import { BodyFont, SubFont } from 'Theme/Fonts';
import { Full } from 'Theme/Global';
import * as Styles from './NoticesScreen.styles';

const NoticesScreen: FC = () => {
	const [notifications, setNotifications] = useNotifications();

	useEffect(() => {
		(async () => {
			try {
				const readNotifications = notifications
					.filter(notification => notification.read === false)
					.map(async notification => notification.id && API.notifications.set(notification.id));

				await Promise.all(readNotifications);

				const _notifications = notifications.map(notification => ({ ...notification, read: true }));
				setTimeout(() => setNotifications(_notifications), 3000);
			} catch (error) {
				console.warn(error);
			}
		})();
	}, []);

	return (
		<SafeAreaView style={Full}>
			<StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'} />
			<Styles.Container>
				{notifications.length < 1 ? (
					<Styles.Placeholder>
						<BodyFont>You have had no interactions yet.</BodyFont>
					</Styles.Placeholder>
				) : (
					<FlatList
						data={notifications}
						renderItem={({ item, index }) => (
							<Styles.NotificationRow>
								<Styles.NotificationTitle>
									<BodyFont bold>Warning</BodyFont>
									{!item.read && <Styles.NotificationUnread colour={Colours.red} />}
								</Styles.NotificationTitle>
								<SubFont>{item.text}</SubFont>
								<SubFont colour={Colours.Greys.GREY3} bold>
									{moment(item.date.seconds * 1000).fromNow(true)}
								</SubFont>
							</Styles.NotificationRow>
						)}
					/>
				)}
			</Styles.Container>
		</SafeAreaView>
	);
};

export default NoticesScreen;
