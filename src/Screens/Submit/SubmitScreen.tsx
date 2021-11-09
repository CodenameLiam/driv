import { useNavigation, useRoute } from '@react-navigation/core';
import API from 'API/API';
import Icon from 'Components/Icon/Icon';
import Loading from 'Components/Loading/Loading';
import { Snack } from 'Components/Snack/Snack';
import ToastConfig from 'Components/Toast/Toast';
import { SubmitNavProps } from 'Navigation/AppNavigation/AppNavigation.params';
import React, { FC, useMemo, useState } from 'react';
import { Platform, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import Colours from 'Theme/Colours';
import { BodyFont } from 'Theme/Fonts';
import { Full } from 'Theme/Global';
import { InteractionNegative, InteractionPositive, InteractionSubType, InteractionType } from 'Types/Interaction';
import { regoRe } from 'Utils/Rego';
import Responsive from 'Utils/Responsive';
import { InteractionEnabled, InteractionEnabledType, Interactions } from 'Types/Attributes';
import * as Styles from './SubmitScreen.styles';
import { useRefresh, useUser } from 'Context/AppContext';
import useLocation from 'Hooks/useLocation';
import functions from '@react-native-firebase/functions';

type SubmitType = InteractionPositive | InteractionNegative;

const SubmitScreen: FC = () => {
	const navigation = useNavigation<SubmitNavProps>();
	const { position, locationGranted } = useLocation();
	const [, setRefresh] = useRefresh();
	const [user] = useUser();
	const [loading, setLoading] = useState(false);

	// Rego state
	const [rego, setRego] = useState('');
	const [valid, setValid] = useState(false);

	// Type state
	const [type, setType] = useState<InteractionType>(InteractionType.Positive);
	const [subTypes, setSubTypes] = useState<InteractionEnabledType>(InteractionEnabled);

	const interactions = Interactions.filter(interaction => interaction.type === type);

	const handleRegoChange = (text: string): void => {
		setRego(text);
		setValid(text.length > 1 && regoRe.test(text) && text !== user?.data?.rego);
	};

	const handleTypeChange = (_type: InteractionType): void => {
		setSubTypes(InteractionEnabled);
		setType(_type);
	};

	const handleSubTypeChange = (subType: SubmitType): void => {
		setSubTypes({ ...subTypes, [subType]: !subTypes[subType] });
	};

	const handleSubmit = async (): Promise<void> => {
		setLoading(true);
		try {
			if (!valid) {
				throw new Error('Please enter a valid registration number');
			}
			if (Object.values(subTypes).every(subType => !subType)) {
				throw new Error('Please select at least one interaction');
			}
			const date = new Date(Date.now());
			const actions = Object.entries(subTypes).map(async ([subType, value]) => {
				if (value) {
					await API.interactions.set(rego, date, type, subType as InteractionSubType, position);
				}
			});

			if (type === InteractionType.Negative) {
				const negativeInteractions = Interactions.filter(
					interaction => subTypes[interaction.subType as InteractionSubType] === true,
				);

				negativeInteractions.forEach(async interaction => {
					if (interaction.severe) {
						await API.interactions.set(rego, date, InteractionType.Warning, interaction.subType, position);
						functions().httpsCallable('sendNotification')({ rego, type: 'severe' });
					}
				});

				functions().httpsCallable('sendNotification')({ rego, type: 'minor' });

				const deductions = negativeInteractions
					.map(interaction => (interaction.severe ? 1.2 : 0.3))
					.reduce((a, b) => a + b, 0);

				await API.interactions.rank(rego, deductions);
			}

			await Promise.all(actions);
			setRefresh(true);
			navigation.navigate('Tabs');
		} catch (error) {
			Snack.error((error as Error).message);
			setLoading(false);
		}
	};

	return (
		<SafeAreaView style={Full}>
			<Loading visible={loading} />
			<ScrollView contentContainerStyle={Full} keyboardShouldPersistTaps="handled" scrollEnabled={false}>
				<Styles.Container>
					<StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'} />

					<Styles.InputContainer>
						<Styles.Input
							autoCapitalize="characters"
							textAlign="center"
							onChangeText={handleRegoChange}
							autoCorrect={false}
							spellCheck={false}
							autoFocus
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
						{rego === user?.data?.rego && (
							<Styles.WarningText>You cannot add an interaction with yourself</Styles.WarningText>
						)}
					</Styles.InputContainer>
					<Styles.TypeButtonContainer>
						<Styles.TypeButton
							onPress={() => handleTypeChange(InteractionType.Positive)}
							colour={type === InteractionType.Positive ? Colours.green : Colours.Greys.GREY1}
						>
							<Styles.TypeButtonFont
								colour={type === InteractionType.Positive ? Colours.white : Colours.Greys.GREY3}
							>
								Good
							</Styles.TypeButtonFont>
						</Styles.TypeButton>
						<Styles.TypeButton
							onPress={() => handleTypeChange(InteractionType.Negative)}
							colour={type === InteractionType.Negative ? Colours.orange : Colours.Greys.GREY1}
						>
							<Styles.TypeButtonFont
								colour={type === InteractionType.Negative ? Colours.white : Colours.Greys.GREY3}
							>
								Bad
							</Styles.TypeButtonFont>
						</Styles.TypeButton>
					</Styles.TypeButtonContainer>
					<Styles.SubTypeButtonContainer>
						{interactions.map(interaction => (
							<Styles.SubTypeButton
								key={interaction.subType}
								onPress={() => handleSubTypeChange(interaction.subType)}
								colour={
									subTypes[interaction.subType]
										? type === InteractionType.Positive
											? Colours.green
											: Colours.orange
										: Colours.Greys.GREY1
								}
							>
								<BodyFont
									maxFontSizeMultiplier={1}
									colour={subTypes[interaction.subType] ? Colours.white : Colours.black}
								>
									{interaction.text}
								</BodyFont>
							</Styles.SubTypeButton>
						))}
					</Styles.SubTypeButtonContainer>

					<Styles.SubmitButton fullWidth onPress={handleSubmit}>
						<Styles.TypeButtonFont colour={Colours.white}>Submit</Styles.TypeButtonFont>
					</Styles.SubmitButton>
				</Styles.Container>
				<Toast ref={ref => Toast.setRef(ref)} config={ToastConfig} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default SubmitScreen;
