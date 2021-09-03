import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { useUser } from 'Context/AppContext';
import AuthReducer from 'Reducers/AuthReducer';

const AppNavigation: FC = () => {
	const [, dispatchUser] = useUser();

	const logout = () => {
		dispatchUser(AuthReducer.actions.logout());
	};

	return (
		<SafeAreaView>
			<Text>App</Text>
			<TouchableOpacity onPress={logout}>
				<Text>Logout</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default AppNavigation;
