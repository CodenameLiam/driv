import { useNavigation } from '@react-navigation/native';
import Icon from 'Components/Icon/Icon';
import { TabNavProps } from 'Navigation/AppNavigation/AppNavigation.params';
import React, { FC, Fragment } from 'react';
import Colours from 'Theme/Colours';
import { SubFontBold } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';
import * as Styles from './Header.styles';

export interface HeaderProps {
	title: string;
	back?: boolean;
}

const Header: FC<HeaderProps> = ({ title, back }) => {
	const navigation = useNavigation<TabNavProps>();

	return (
		<Styles.Container>
			{back && (
				<Styles.BackContainer onPress={() => navigation.goBack()}>
					<Icon family="feather" name={'chevron-left'} size={Responsive.h(4)} colour={Colours.black} />
				</Styles.BackContainer>
			)}
			<Styles.Title centered={back}>{title}</Styles.Title>
			{!back && (
				<Fragment>
					<Styles.IconContainer onPress={() => navigation.navigate('Notices')}>
						<Icon family="feather" name="bell" size={Responsive.h(3)} colour={Colours.black} />
						<Styles.IconNotification>
							<SubFontBold colour={Colours.white}></SubFontBold>
						</Styles.IconNotification>
					</Styles.IconContainer>
					<Styles.IconContainer onPress={() => navigation.navigate('Timeline')}>
						<Icon family="feather" name="clock" size={Responsive.h(3)} colour={Colours.black} />
					</Styles.IconContainer>
					<Styles.IconContainer onPress={() => navigation.navigate('Settings')}>
						<Icon family="feather" name="settings" size={Responsive.h(3)} colour={Colours.black} />
					</Styles.IconContainer>
				</Fragment>
			)}
		</Styles.Container>
	);
};

export default Header;
