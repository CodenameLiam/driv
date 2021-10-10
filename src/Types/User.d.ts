import { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface UserData {
	rego?: string;
}

export interface User {
	user?: FirebaseAuthTypes.User;
	data?: UserData;
}
