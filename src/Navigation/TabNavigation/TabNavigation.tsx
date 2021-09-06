import React, { FC, Fragment } from 'react';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabParams } from './TabNavigation.params';
import HomeScreen from 'Screens/Home/HomeScreen';
import { View, Text } from 'react-native';
import Colours from 'Theme/Colours';
import { fontFamily, TitleFont } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';
import ProfileScreen from 'Screens/Profile/ProfileScreen';
import TabBar from 'Components/TabBar/TabBar';

const Tab = createBottomTabNavigator<TabParams>();

const TabNavigation: FC = () => {
	return (
		<Tab.Navigator
			tabBar={TabBar}
			screenOptions={{
				headerTitleAlign: 'left',
				headerTitleStyle: { fontFamily: fontFamily, fontSize: Responsive.h(4) },
				headerStatusBarHeight: Responsive.h(8),
				// headerBackground: () => <Fragment />,
				headerRight: () => (
					<View>
						<Text>Bruh</Text>
					</View>
				),
			}}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default TabNavigation;
