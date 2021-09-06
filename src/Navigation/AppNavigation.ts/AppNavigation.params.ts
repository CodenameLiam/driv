import { StackNavigationProp } from '@react-navigation/stack';

export type AppParams = {
	Tabs: undefined;
	Submit: undefined;
	Settings: undefined;
	Notices: undefined;
	Timeline: undefined;
};

// App Navigation Types
export type TabNavProps = StackNavigationProp<AppParams, 'Tabs'>;
export type SubmitNavProps = StackNavigationProp<AppParams, 'Submit'>;
export type NoticesNavProps = StackNavigationProp<AppParams, 'Notices'>;
export type TimelineNavProps = StackNavigationProp<AppParams, 'Timeline'>;
