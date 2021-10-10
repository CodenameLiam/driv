import React, { FC } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as Styles from './TabBar.styles';
import { StyleSheet } from 'react-native';
import Icon from 'Components/Icon/Icon';
import Responsive from 'Utils/Responsive';
import Colours from 'Theme/Colours';
import LinearGradient from 'react-native-linear-gradient';

const TabBar: FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
	const handleNavigation = (): void => {
		const parentNavigator = navigation.getParent();
		parentNavigator && parentNavigator.navigate('Submit');
	};

	return (
		<Styles.Container style={{ ...Styles.ContainerShadow.shadow }}>
			<Styles.IconButton onPress={() => navigation.navigate('Home')} disabled={state.index === 0}>
				<Styles.IconContainer active={state.index === 0}>
					<Icon family="feather" name="home" size={Responsive.h(4)} colour={Colours.black} />
				</Styles.IconContainer>
			</Styles.IconButton>
			<Styles.AddContainer>
				<Styles.AddWrapper />
				<Styles.AddButton onPress={handleNavigation}>
					<LinearGradient
						style={[StyleSheet.absoluteFill]}
						colors={[Colours.primary, Colours.secondary]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
					/>
					<Icon family="fontawesome5" name="plus" size={Responsive.h(4.5)} colour={Colours.white} />
				</Styles.AddButton>
			</Styles.AddContainer>
			<Styles.IconButton onPress={() => navigation.navigate('Profile')} disabled={state.index === 1}>
				<Styles.IconContainer active={state.index === 1}>
					<Icon family="feather" name="user" size={Responsive.h(4)} colour={Colours.black} />
				</Styles.IconContainer>
			</Styles.IconButton>
		</Styles.Container>
	);
};

export default TabBar;
