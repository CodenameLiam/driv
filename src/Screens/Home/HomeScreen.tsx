import { useFocusEffect, useNavigation } from '@react-navigation/core';
import { useUser } from 'Context/AppContext';
import { AppParams, TabNavProps } from 'Navigation/AppNavigation.ts/AppNavigation.params';
import { TabParams } from 'Navigation/TabNavigation/TabNavigation.params';
import React, { FC, useCallback } from 'react';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import AuthReducer from 'Reducers/AuthReducer';
import * as Styles from './HomeScreen.styles';

const HomeScreen: FC = () => {
	const navigation = useNavigation<TabNavProps>();

	const [, dispatchUser] = useUser();

	const logout = (): void => {
		dispatchUser(AuthReducer.actions.logout());
	};

	return (
		<Styles.Container>
			<Text>App</Text>
			<TouchableOpacity onPress={logout}>
				<Text>Logout</Text>
			</TouchableOpacity>
		</Styles.Container>
	);
};

export default HomeScreen;
