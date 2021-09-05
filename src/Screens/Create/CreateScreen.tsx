import React, { FC, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Colours from 'Theme/Colours';
import { SubFont, SubFontBold, TitleFont } from 'Theme/Fonts';
import { Full } from 'Theme/Global';
import Icon from 'Components/Icon/Icon';
import Button from 'Components/Button/Button';
import useCreateAccount from 'Hooks/useCreateAccount';
import * as Styles from 'Components/Auth/Auth.styles';
import * as Atoms from 'Components/Auth/Auth.atoms';
import { useNavigation } from '@react-navigation/core';
import { CreateNavProps } from 'Navigation/AuthNavigation/AuthNavigation.params';
import { Snack } from 'Components/Snack/Snack';

const CreateScreen: FC = () => {
	const navigation = useNavigation<CreateNavProps>();
	const [showPassword, setShowPassword] = useState(false);
	const { valid, handleChange, handleCreate } = useCreateAccount();

	// Snack.error('BRUH');

	return (
		<SafeAreaView style={Full}>
			<ScrollView contentContainerStyle={Full} keyboardShouldPersistTaps="handled" scrollEnabled={false}>
				<Styles.Container>
					<Styles.TitleContainer>
						<Icon
							family="fontawesome5"
							name="car"
							colour={Colours.primary}
							size={24}
							style={Styles.TitleIcon}
						/>
						<TitleFont>Drive</TitleFont>
					</Styles.TitleContainer>

					<Styles.InputContainer>
						<Styles.Input placeholder="Name" onChangeText={e => handleChange(e, 'name')} />
						<Styles.IconContainer>{valid.name && <Atoms.Check />}</Styles.IconContainer>
					</Styles.InputContainer>

					<Styles.InputContainer>
						<Styles.Input
							placeholder="Email"
							keyboardType="email-address"
							autoCapitalize="none"
							onChangeText={e => handleChange(e, 'email')}
						/>
						<Styles.IconContainer>{valid.email && <Atoms.Check />}</Styles.IconContainer>
					</Styles.InputContainer>

					<Styles.InputContainer>
						<Styles.Input
							placeholder="Password (6+ Characters)"
							secureTextEntry={!showPassword}
							onChangeText={e => handleChange(e, 'password')}
						/>
						<Styles.IconContainer>
							{valid.password && <Atoms.Check />}
							<Atoms.Eye open={showPassword} onPress={() => setShowPassword(prev => !prev)} />
						</Styles.IconContainer>
					</Styles.InputContainer>

					<Button
						style={Styles.Button}
						text="Create Account"
						fullWidth
						onPress={handleCreate}
						disabled={Object.values(valid).some(value => !value)}
					/>

					<Styles.BottomTextContainer onPress={() => navigation.navigate('Login')}>
						<SubFont>Already have an account? </SubFont>
						<SubFontBold>Login</SubFontBold>
					</Styles.BottomTextContainer>
				</Styles.Container>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CreateScreen;
