import Icon from 'Components/Icon/Icon';
import { Snack } from 'Components/Snack/Snack';
import ToastConfig from 'Components/Toast/Toast';
import { useUser } from 'Context/AppContext';
import React, { FC } from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import AuthReducer from 'Reducers/AuthReducer';
import Colours from 'Theme/Colours';
import { Full } from 'Theme/Global';
import Responsive from 'Utils/Responsive';
import * as Styles from './SettingsScreen.styles';

const ChevronRight: FC = () => (
	<Icon family="feather" name={'chevron-right'} size={Responsive.h(3)} colour={Colours.black} />
);

const SettingsScreen: FC = () => {
	const [user, dispatchUser] = useUser();

	const logout = (): void => {
		dispatchUser(AuthReducer.actions.logout());
	};

	const comingSoon = (): void => {
		Snack.info('Coming soon');
	};

	return (
		<SafeAreaView style={Full}>
			<StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'} />

			<ScrollView>
				<Styles.InfoContainer>
					{user?.user?.photoURL ? (
						<Styles.Picture source={{ uri: user.user.photoURL }} />
					) : (
						<Styles.PicturePlaceholder>
							<Icon
								family="fontawesome"
								name="camera"
								size={Responsive.h(2.5)}
								colour={Colours.Greys.GREY2}
							/>
						</Styles.PicturePlaceholder>
					)}
					<Styles.TextContainer>
						<Styles.Name>{user?.user?.displayName}</Styles.Name>
					</Styles.TextContainer>
				</Styles.InfoContainer>

				<Styles.SettingsGroup>
					<Styles.SettingsButton onPress={comingSoon}>
						<Styles.SettingsFont>Edit Profile</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton>
					<Styles.SettingsButton onPress={comingSoon}>
						<Styles.SettingsFont>Change Password</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton>
					<Styles.SettingsButton onPress={comingSoon}>
						<Styles.SettingsFont>History</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton>
					<Styles.SettingsButton onPress={comingSoon}>
						<Styles.SettingsFont>Feedback</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton>
				</Styles.SettingsGroup>
				<Styles.SettingsGroup>
					<Styles.SettingsButton onPress={comingSoon}>
						<Styles.SettingsFont>About Us</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton>
					<Styles.SettingsButton onPress={comingSoon}>
						<Styles.SettingsFont>Privacy Policy</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton>
					<Styles.SettingsButton onPress={comingSoon}>
						<Styles.SettingsFont>Terms and Conditions</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton>
				</Styles.SettingsGroup>
				<Styles.SettingsGroup>
					<Styles.SettingsButton onPress={logout}>
						<Styles.SettingsFont>Logout</Styles.SettingsFont>
						<Icon family="material" name={'logout'} size={Responsive.h(3)} colour={Colours.black} />
					</Styles.SettingsButton>
				</Styles.SettingsGroup>
			</ScrollView>
			<Toast config={ToastConfig} />
		</SafeAreaView>
	);
};

export default SettingsScreen;
