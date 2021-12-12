import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsParams } from './SettingsNavigation.params';
import SettingsScreen from 'Screens/Settings/SettingsScreen';
import Header from 'Components/Header/Header';
import SettingsHeader from 'Components/Header/SettingsHeader';
import EditProfileScreen from 'Screens/EditProfile/EditProfileScreen';
const SettingsStack = createNativeStackNavigator<SettingsParams>();

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
				component={EditProfileScreen}
				options={{
					header: ({ navigation }) => <SettingsHeader title="Edit Profile" navigation={navigation} />,
				}}
			/>
		</SettingsStack.Navigator>
	);
};

export default SettingsNavigation;
