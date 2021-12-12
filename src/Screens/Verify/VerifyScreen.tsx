import { Snack } from 'Components/Snack/Snack';
import { useUser } from 'Context/AppContext';
import React, { FC, useEffect, useCallback } from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colours from 'Theme/Colours';
import { BodyFont, TitleFont, SubFontBold, SubFont } from 'Theme/Fonts';
import Email from 'Assets/Images/Email.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Styles from './VerifyScreen.styles';
import Responsive from 'Utils/Responsive';
import AuthReducer from 'Reducers/AuthReducer';
import Button from 'Components/Button/Button';
import { Full } from 'Theme/Global';
import Block from 'Components/Block/Block';
import auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';
import { VerifyNavProps } from 'Navigation/AppNavigation/AppNavigation.params';

const imageDimensions = Responsive.wpx(30);

const VerifyScreen: FC = () => {
	const [user, dispatchUser] = useUser();
	const navigation = useNavigation<VerifyNavProps>();

	const handleVerifiedPress = async (): Promise<void> => {
		await auth().currentUser?.reload();
		const _user = auth().currentUser;

		if (_user?.emailVerified) {
			dispatchUser(AuthReducer.actions.user(_user));
			navigation.dispatch(StackActions.replace(user?.data ? 'Tabs' : 'Onboarding'));
		} else {
			Snack.error('Your email has still not been verified');
		}
	};

	const sendVerificationEmail = useCallback(async () => {
		try {
			await user?.user?.sendEmailVerification();
		} catch (error) {
			console.error(error);
			Snack.error((error as Error).message);
		}
	}, [user]);

	useEffect(() => {
		sendVerificationEmail();
	}, [sendVerificationEmail]);

	const logout = (): void => {
		dispatchUser(AuthReducer.actions.logout());
	};

	return (
		<SafeAreaView style={Full}>
			<Styles.Container>
				<Block marginBottom={Responsive.h(1)}>
					<Styles.EmailContainer>
						<LinearGradient
							style={[StyleSheet.absoluteFill]}
							colors={[Colours.primary, Colours.secondary]}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
						/>
						<Email width={imageDimensions} height={imageDimensions} />
					</Styles.EmailContainer>
				</Block>

				<Block marginBottom={Responsive.h(1)}>
					<TitleFont>Check your email</TitleFont>
				</Block>
				<Block marginBottom={Responsive.h(1)}>
					<BodyFont>An email has been sent to</BodyFont>
					<BodyFont bold>{user?.user?.email}</BodyFont>
				</Block>
				<Block marginBottom={Responsive.h(2)}>
					<BodyFont align="center">
						To verify your account, please follow the instructions in the verification email sent to your
						account.
					</BodyFont>
				</Block>
				<Block fullWidth marginBottom={Responsive.h(1)}>
					<Button fullWidth text="I verified my email" onPress={handleVerifiedPress} />
					<Button hideGradient fullWidth text="Resend verification email" onPress={sendVerificationEmail} />
				</Block>
				<TouchableOpacity onPress={logout}>
					<SubFont>Sign in with another account</SubFont>
				</TouchableOpacity>
			</Styles.Container>
		</SafeAreaView>
	);
};

export default VerifyScreen;
