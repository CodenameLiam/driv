import { useUser } from 'Context/AppContext';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import AuthReducer from 'Reducers/AuthReducer';
import { BodyFont } from 'Theme/Fonts';
import * as Styles from './SettingsScreen.styles';

const SettingsScreen: FC = () => {
	const [user, dispatchUser] = useUser();

	const logout = (): void => {
		dispatchUser(AuthReducer.actions.logout());
	};

	return (
		<Styles.Container>
			<TouchableOpacity onPress={logout}>
				<BodyFont>Logout</BodyFont>
			</TouchableOpacity>
		</Styles.Container>
	);
};

export default SettingsScreen;
