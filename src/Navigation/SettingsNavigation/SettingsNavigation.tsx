import React, { FC } from 'react';
import { useUser } from 'Context/AppContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsParams } from './SettingsNavigation.params';
import AppNavigation from 'Navigation/AppNavigation/AppNavigation';
import SettingsScreen from 'Screens/Settings/SettingsScreen';
import { View } from 'react-native';
import { BodyFont } from 'Theme/Fonts';
import Header from 'Components/Header/Header';
import SettingsHeader from 'Components/Header/SettingsHeader';
import Toast from 'react-native-toast-message';
import ToastConfig from 'Components/Toast/Toast';
const SettingsStack = createNativeStackNavigator<SettingsParams>();

const Test: FC = () => {
	return (
		<View>
			<BodyFont>BRUH</BodyFont>
		</View>
	);
};

const SettingsNavigation: FC = () => {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					header: () => <Header title="Settings" back />,
				}}
			/>
			<SettingsStack.Screen
				name="EditProfile"
				component={Test}
				options={{
					header: ({ navigation }) => <SettingsHeader title="Edit Profile" navigation={navigation} />,
				}}
			/>
		</SettingsStack.Navigator>
	);
};

export default SettingsNavigation;
