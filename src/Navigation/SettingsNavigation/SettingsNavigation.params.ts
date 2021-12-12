import { StackNavigationProp } from '@react-navigation/stack';

export type SettingsParams = {
	Settings: undefined;
	EditProfile: undefined;
};

export type SettingsNavProps = StackNavigationProp<SettingsParams, 'Settings'>;
