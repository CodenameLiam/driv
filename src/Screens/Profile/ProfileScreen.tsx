import { useNavigation } from '@react-navigation/core';
import { TabNavProps } from 'Navigation/AppNavigation.ts/AppNavigation.params';
import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as Styles from './ProfileScreen.styles';

const ProfileScreen: FC = () => {
	const navigation = useNavigation<TabNavProps>();

	return (
		<Styles.Container>
			<TouchableOpacity onPress={() => navigation.navigate('Submit')}>
				<Text>Bruh</Text>
			</TouchableOpacity>
		</Styles.Container>
	);
};

export default ProfileScreen;
