import { Dispatch, useEffect, useReducer, useState } from 'react';
import auth from '@react-native-firebase/auth';
import AuthReducer, { AuthAction, AuthState } from 'Reducers/AuthReducer';

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
		const authListener = auth().onAuthStateChanged(user => {
			user && dispatchUser(AuthReducer.actions.login(user));
			setLoading(false);
		});
		return authListener;
	}, []);

	return { loading, user, dispatchUser };
};

export default useAuth;
