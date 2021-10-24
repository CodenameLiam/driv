import { Dispatch, useEffect, useReducer, useState } from 'react';
import auth from '@react-native-firebase/auth';
import AuthReducer, { AuthAction, AuthState } from 'Reducers/AuthReducer';
import API from 'API/API';

interface UseAuth {
	loading: boolean;
	user: AuthState;
	dispatchUser: Dispatch<AuthAction>;
}

// Checks if the user is authenticated
const useAuth = (): UseAuth => {
	const [loading, setLoading] = useState<boolean>(true);
	const [user, dispatchUser] = useReducer(AuthReducer.reducer, null);

	useEffect(() => {
		const authListener = auth().onAuthStateChanged(async _user => {
			if (_user) {
				setLoading(true);
				const userDocument = await API.users.get(_user.uid);
				dispatchUser(AuthReducer.actions.login(_user, userDocument.data()));
			}
			setLoading(false);
		});
		return authListener;
	}, []);

	return { loading, user, dispatchUser };
};

export default useAuth;
