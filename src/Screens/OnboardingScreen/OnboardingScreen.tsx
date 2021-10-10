import { useName, useUser } from 'Context/AppContext';
import React, { FC, useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import AuthReducer from 'Reducers/AuthReducer';
import { TitleFont } from 'Theme/Fonts';
import * as Styles from './OnboardingScreen.styles';
import { Full } from 'Theme/Global';
import API from 'API/API';
import Icon from 'Components/Icon/Icon';
import Colours from 'Theme/Colours';
import Responsive from 'Utils/Responsive';
import { StackActions, useNavigation } from '@react-navigation/core';
import { OnboardingNavProps } from 'Navigation/AppNavigation/AppNavigation.params';
import { regoRe } from 'Utils/Rego';

const OnboardingScreen: FC = () => {
	const navigation = useNavigation<OnboardingNavProps>();
	const [name] = useName();
	const [user, dispatchUser] = useUser();
	const [rego, setRego] = useState('');
	const [valid, setValid] = useState(false);

	const logout = (): void => {
		dispatchUser(AuthReducer.actions.logout());
	};

	const handleChange = (text: string): void => {
		setRego(text);
		setValid(text.length > 1 && regoRe.test(text));
	};

	const handleSubmit = async (): Promise<void> => {
		if (valid && user?.user) {
			await API.users.set(user?.user?.uid, rego.toUpperCase());
			dispatchUser(AuthReducer.actions.data({ ...user.data, rego: rego }));
			navigation.dispatch(StackActions.replace('Tabs'));
		}
	};

	return (
		<SafeAreaView style={Full}>
			<ScrollView contentContainerStyle={Full} keyboardShouldPersistTaps="handled" scrollEnabled={false}>
				<Styles.Container>
					<Styles.BackContainer onPress={logout}>
						<Icon family="feather" name={'chevron-left'} size={Responsive.h(4)} colour={Colours.black} />
					</Styles.BackContainer>
					<Styles.TitleContainer>
						<TitleFont>Hello, {user?.user?.displayName ?? name}</TitleFont>
						<Styles.SubTitleFont>And welcome to Drive</Styles.SubTitleFont>
					</Styles.TitleContainer>
					<Styles.SubTitleFont>To begin, enter your vehciles registration number below</Styles.SubTitleFont>
					<Styles.InputContainer>
						<Styles.Input
							autoCapitalize="characters"
							textAlign="center"
							returnKeyType="go"
							onChangeText={handleChange}
							onSubmitEditing={handleSubmit}
							autoCorrect={false}
							spellCheck={false}
						/>
						<Styles.IconContainer>
							{valid && (
								<Icon
									family="fontawesome"
									name="check"
									size={Responsive.h(2.5)}
									colour={Colours.green}
								/>
							)}
						</Styles.IconContainer>
					</Styles.InputContainer>
				</Styles.Container>
			</ScrollView>
		</SafeAreaView>
	);
};

export default OnboardingScreen;
