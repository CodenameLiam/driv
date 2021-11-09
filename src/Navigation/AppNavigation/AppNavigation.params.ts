import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

export type AppParams = {
	Onboarding: undefined;
	Tabs: undefined;
	Submit: undefined;
	SettingsNav: undefined;
	Notices: undefined;
	Timeline: undefined;
};

// App Navigation Types
export type OnboardingNavProps = StackNavigationProp<AppParams, 'Onboarding'>;
export type TabNavProps = StackNavigationProp<AppParams, 'Tabs'>;
export type TabRouteProps = RouteProp<AppParams, 'Tabs'>;
export type SubmitNavProps = StackNavigationProp<AppParams, 'Submit'>;
export type NoticesNavProps = StackNavigationProp<AppParams, 'Notices'>;
export type TimelineNavProps = StackNavigationProp<AppParams, 'Timeline'>;
