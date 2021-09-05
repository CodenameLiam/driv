import React, { FC, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import * as Styles from 'Components/Auth/Auth.styles';
import * as Atoms from 'Components/Auth/Auth.atoms';
import { Full } from 'Theme/Global';
import { SubFont, SubFontBold, TitleFont } from 'Theme/Fonts';
import useLogin from 'Hooks/useLogin';
import Button from 'Components/Button/Button';
import { useNavigation } from '@react-navigation/core';
import { LoginNavProps } from 'Navigation/AuthNavigation/AuthNavigation.params';

const LoginScreen: FC = () => {
	const navigation = useNavigation<LoginNavProps>();
	const [showPassword, setShowPassword] = useState(false);
	const { valid, handleChange, handleLogin } = useLogin();

	return (
		<SafeAreaView style={Full}>
			<ScrollView contentContainerStyle={Full} keyboardShouldPersistTaps="handled" scrollEnabled={false}>
				<Styles.Container>
					<Styles.BackContainer>
						<Atoms.Back />
					</Styles.BackContainer>

					<Styles.TitleContainer>
						<TitleFont>Login</TitleFont>
					</Styles.TitleContainer>

					<Styles.InputContainer>
						<Styles.Input placeholder="Email" onChangeText={e => handleChange(e, 'email')} />
					</Styles.InputContainer>
					<Styles.InputContainer>
						<Styles.Input
							placeholder="Password"
							onChangeText={e => handleChange(e, 'password')}
							secureTextEntry={!showPassword}
						/>
						<Styles.IconContainer>
							<Atoms.Eye open={showPassword} onPress={() => setShowPassword(prev => !prev)} />
						</Styles.IconContainer>
					</Styles.InputContainer>

					<Button style={Styles.Button} text="Login" fullWidth onPress={handleLogin} disabled={!valid} />
					<Styles.ForgotContainer onPress={() => navigation.navigate('Forgot')}>
						<SubFontBold>Forgot Password?</SubFontBold>
					</Styles.ForgotContainer>

					<Styles.BottomTextContainer onPress={() => navigation.navigate('Create')}>
						<SubFont>New to Drive? </SubFont>
						<SubFontBold>Sign up</SubFontBold>
					</Styles.BottomTextContainer>
				</Styles.Container>
			</ScrollView>
		</SafeAreaView>
	);
};

export default LoginScreen;
