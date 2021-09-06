import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type TabParams = {
	Home: undefined;
	Profile: undefined;
};

// App Navigation Types
export type HomeNavProps = BottomTabNavigationProp<TabParams, 'Home'>;
export type ProfileNavProps = BottomTabNavigationProp<TabParams, 'Profile'>;
