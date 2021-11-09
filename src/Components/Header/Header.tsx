import { useNavigation } from '@react-navigation/native';
import Icon from 'Components/Icon/Icon';
import { useNotifications } from 'Context/NotificationContext';
import { TabNavProps } from 'Navigation/AppNavigation/AppNavigation.params';
import React, { FC, Fragment, useMemo } from 'react';
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
	const [notifications] = useNotifications();
	const unreadNotifications = useMemo(
		() => notifications.filter(notification => notification.read === false),
		[notifications],
	);

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
						{unreadNotifications.length > 0 && (
							<Styles.IconNotification>
								<SubFontBold colour={Colours.white}>
									{Math.min(99, unreadNotifications.length)}
								</SubFontBold>
							</Styles.IconNotification>
						)}
					</Styles.IconContainer>
					<Styles.IconContainer onPress={() => navigation.navigate('Timeline')}>
						<Icon family="feather" name="clock" size={Responsive.h(3)} colour={Colours.black} />
					</Styles.IconContainer>
					<Styles.IconContainer onPress={() => navigation.navigate('SettingsNav')}>
						<Icon family="feather" name="settings" size={Responsive.h(3)} colour={Colours.black} />
					</Styles.IconContainer>
				</Fragment>
			)}
		</Styles.Container>
	);
};

export default Header;
