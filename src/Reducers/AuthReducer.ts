import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { User, UserData } from 'Types/User';

/* Authentication state */
export type AuthState = User | null;

/* Reducer action types */
export type AuthAction =
	| {
			type: 'LOGIN';
			payload: {
				user: FirebaseAuthTypes.User;
				data?: UserData;
			};
	  }
	| {
			type: 'LOGOUT';
	  }
	| {
			type: 'USER';
			payload: FirebaseAuthTypes.User;
	  }
	| {
			type: 'DATA';
			payload: UserData;
	  };

/* Reducer actions */
export const actions = {
	logout: (): AuthAction => ({ type: 'LOGOUT' }),
	login: (user: FirebaseAuthTypes.User, data?: UserData): AuthAction => ({ type: 'LOGIN', payload: { user, data } }),
	user: (user: FirebaseAuthTypes.User): AuthAction => ({ type: 'USER', payload: user }),
	data: (data: UserData): AuthAction => ({ type: 'DATA', payload: data }),
};

/* Authentication reducer */
const reducer = (state: AuthState, action: AuthAction): AuthState => {
	switch (action.type) {
		case 'LOGIN':
			console.log(`Logging in as ${action.payload.user.email}`);
			return { ...state, user: action.payload.user, data: action.payload.data };
		case 'LOGOUT':
			auth().signOut();
			console.log(`Logging out of ${state?.user?.email}`);
			return null;
		case 'USER':
			return { ...state, user: action.payload };
		case 'DATA':
			return { ...state, data: action.payload };
		default:
			return state;
	}
};

/* Reducer object */
const AuthReducer = {
	actions,
	reducer,
};

export default AuthReducer;
