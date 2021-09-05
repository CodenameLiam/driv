import React, { FC, useCallback, useMemo, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { TitleFont, SubFontBold, SubFont } from 'Theme/Fonts';
import { Full } from 'Theme/Global';
import * as Styles from 'Components/Auth/Auth.styles';
import * as Atoms from 'Components/Auth/Auth.atoms';
import Button from 'Components/Button/Button';
import { useNavigation } from '@react-navigation/core';
import { ForgotNavProps } from 'Navigation/AuthNavigation/AuthNavigation.params';
import auth from '@react-native-firebase/auth';
import { Snack } from 'Components/Snack/Snack';

const ForgotScreen: FC = () => {
	const navigation = useNavigation<ForgotNavProps>();
	const [email, setEmail] = useState('');
	const valid = useMemo(() => email.length > 0, [email]);

	const handleLogin = useCallback(async () => {
		await auth().sendPasswordResetEmail(email);
		Snack.success('Reset password link sent');
	}, [email]);

	return (
		<SafeAreaView style={Full}>
			<ScrollView contentContainerStyle={Full} keyboardShouldPersistTaps="handled" scrollEnabled={false}>
				<Styles.Container>
					<Styles.BackContainer>
						<Atoms.Back />
					</Styles.BackContainer>

					<Styles.TitleContainer>
						<TitleFont>Reset Password</TitleFont>
					</Styles.TitleContainer>

					<Styles.InputContainer>
						<Styles.Input placeholder="Email" onChangeText={setEmail} />
					</Styles.InputContainer>

					<Button style={Styles.Button} text="Send" fullWidth onPress={handleLogin} disabled={!valid} />

					<Styles.BottomTextContainer onPress={() => navigation.navigate('Create')}>
						<SubFont>New to Drive? </SubFont>
						<SubFontBold>Sign up</SubFontBold>
					</Styles.BottomTextContainer>
				</Styles.Container>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ForgotScreen;
