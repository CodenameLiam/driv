import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppParams } from './AppNavigation.params';
import TabNavigation from 'Navigation/TabNavigation/TabNavigation';
import SubmitScreen from 'Screens/Submit/SubmitScreen';

const AppStack = createNativeStackNavigator<AppParams>();

const AppNavigation: FC = () => {
	return (
		<AppStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
			<AppStack.Screen name="Tabs" component={TabNavigation} options={{ statusBarStyle: 'dark' }} />
			<AppStack.Screen name="Submit" component={SubmitScreen} />
		</AppStack.Navigator>
	);
};

export default AppNavigation;
