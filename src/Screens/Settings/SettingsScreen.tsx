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
import { Linking } from 'react-native';
import * as Styles from './SettingsScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { SettingsNavProps } from 'Navigation/SettingsNavigation/SettingsNavigation.params';
import auth from '@react-native-firebase/auth';

const ChevronRight: FC = () => (
	<Icon family="feather" name={'chevron-right'} size={Responsive.h(3)} colour={Colours.black} />
);

const SettingsScreen: FC = () => {
	const navigation = useNavigation<SettingsNavProps>();
	const [user, dispatchUser] = useUser();

	const logout = (): void => {
		dispatchUser(AuthReducer.actions.logout());
	};

	const handleResetPassword = async (): Promise<void> => {
		try {
			if (user?.user?.email) {
				await auth().sendPasswordResetEmail(user.user.email);
				Snack.success(`Password reset email sent to ${user.user.email}`);
			} else {
				throw new Error();
			}
		} catch (error) {
			Snack.error('Could send reset password email');
		}
	};

	const handlePrivacy = async (): Promise<void> => {
		const privacyURL = 'https://driv.netlify.app/privacy-policy';
		const supported = await Linking.canOpenURL(privacyURL);
		if (supported) {
			Linking.openURL(privacyURL);
		} else {
			Snack.error('Could not open link');
			console.error("Don't know how to open URI: " + privacyURL);
		}
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
					<Styles.SettingsButton onPress={() => navigation.navigate('EditProfile')}>
						<Styles.SettingsFont>Edit Profile</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton>
					<Styles.SettingsButton onPress={handleResetPassword}>
						<Styles.SettingsFont>Change Password</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton>
					{/* <Styles.SettingsButton onPress={comingSoon}>
						<Styles.SettingsFont>History</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton>
					<Styles.SettingsButton onPress={comingSoon}>
						<Styles.SettingsFont>Feedback</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton> */}
				</Styles.SettingsGroup>
				<Styles.SettingsGroup>
					<Styles.SettingsButton onPress={handlePrivacy}>
						<Styles.SettingsFont>About Us</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton>
					<Styles.SettingsButton onPress={handlePrivacy}>
						<Styles.SettingsFont>Privacy Policy</Styles.SettingsFont>
						<ChevronRight />
					</Styles.SettingsButton>
					<Styles.SettingsButton onPress={handlePrivacy}>
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
