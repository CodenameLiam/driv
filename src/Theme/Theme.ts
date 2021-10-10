import { DefaultTheme, Theme } from '@react-navigation/native';
import Colours from './Colours';

export const NavTheme: Theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: Colours.Greys.GREY0,
	},
};
