import React, { FC } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { SubFont, TitleFont } from 'Theme/Fonts';
import { Full } from 'Theme/Global';
import * as Styles from 'Components/Auth/Auth.styles';
import * as Atoms from 'Components/Auth/Auth.atoms';
import Button from 'Components/Button/Button';
import useReset from 'Hooks/useReset';
import Loading from 'Components/Loading/Loading';

const ForgotScreen: FC = () => {
	const { valid, setEmail, handleReset, showSpinner } = useReset();

	return (
		<SafeAreaView style={Full}>
			<Loading visible={showSpinner} />
			<ScrollView contentContainerStyle={Full} keyboardShouldPersistTaps="handled" scrollEnabled={false}>
				<Styles.Container>
					<Styles.BackContainer>
						<Atoms.Back />
					</Styles.BackContainer>

					<Styles.TitleContainer>
						<TitleFont>Reset Password</TitleFont>
					</Styles.TitleContainer>

					<Styles.InputContainer>
						<Styles.Input
							autoCapitalize="none"
							placeholder="Email"
							onChangeText={setEmail}
							returnKeyType="send"
							onSubmitEditing={handleReset}
						/>
					</Styles.InputContainer>

					<Button style={Styles.Button} text="Send" fullWidth onPress={handleReset} disabled={!valid} />
					<Styles.ForgotContainer disabled>
						<SubFont>We'll email you a link to reset your password</SubFont>
					</Styles.ForgotContainer>
				</Styles.Container>
			</ScrollView>
		</SafeAreaView>
	);
};

export default ForgotScreen;
