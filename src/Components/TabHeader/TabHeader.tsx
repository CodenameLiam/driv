import { useNavigation } from '@react-navigation/core';
import Icon from 'Components/Icon/Icon';
import { TabNavProps } from 'Navigation/AppNavigation/AppNavigation.params';
import React, { FC } from 'react';
import Colours from 'Theme/Colours';
import { BodyFont, SubFontBold } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';
import * as Styles from './TabHeader.styles';

const TabHeader: FC = () => {
	const navigation = useNavigation<TabNavProps>();

	return (
		<Styles.Container>
			<Styles.IconContainer onPress={() => navigation.navigate('Notices')}>
				<Icon family="feather" name="bell" size={Responsive.h(3)} colour={Colours.black} />
				<Styles.IconNotification>
					<SubFontBold colour={Colours.white}></SubFontBold>
				</Styles.IconNotification>
			</Styles.IconContainer>
			<Styles.IconContainer onPress={() => navigation.navigate('Settings')}>
				<Icon family="feather" name="settings" size={Responsive.h(3)} colour={Colours.black} />
			</Styles.IconContainer>
		</Styles.Container>
	);
};

export default TabHeader;
