import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParams } from './TabNavigation.params';
import HomeScreen from 'Screens/Home/HomeScreen';
import ProfileScreen from 'Screens/Profile/ProfileScreen';
import TabBar from 'Components/TabBar/TabBar';
import Header from 'Components/Header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<TabParams>();

const TabNavigation: FC = () => {
	return (
		<Tab.Navigator tabBar={TabBar}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					header: () => (
						<SafeAreaView edges={['top']}>
							<Header title="Home" />
						</SafeAreaView>
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					header: () => (
						<SafeAreaView edges={['top']}>
							<Header title="Profile" />
						</SafeAreaView>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNavigation;
