import { FirebaseAuthTypes } from '@react-native-firebase/auth';

interface UserData {
	rego?: string;
	rank?: number;
}

export interface User {
	user?: FirebaseAuthTypes.User;
	data?: UserData;
}
