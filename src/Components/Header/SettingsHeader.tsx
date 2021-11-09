import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'Components/Icon/Icon';
import { useNotifications } from 'Context/NotificationContext';
import { TabNavProps } from 'Navigation/AppNavigation/AppNavigation.params';
import { SettingsNavProps } from 'Navigation/SettingsNavigation/SettingsNavigation.params';
import React, { FC, Fragment, useMemo } from 'react';
import Colours from 'Theme/Colours';
import { SubFontBold } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';
import * as Styles from './Header.styles';

export interface HeaderProps {
	title: string;
	navigation: NativeStackNavigationProp<ParamListBase, string>;
}

const SettingsHeader: FC<HeaderProps> = ({ title, navigation }) => {
	return (
		<Styles.Container>
			<Styles.BackContainer onPress={() => navigation.goBack()}>
				<Icon family="feather" name={'chevron-left'} size={Responsive.h(4)} colour={Colours.black} />
			</Styles.BackContainer>

			<Styles.Title centered>{title}</Styles.Title>
		</Styles.Container>
	);
};

export default SettingsHeader;
