import auth from '@react-native-firebase/auth';
import { useCallback, useMemo, useState } from 'react';

interface UseLogin {
	valid: boolean;
	handleChange: (value: string, action: 'email' | 'password') => void;
	handleLogin: () => Promise<void>;
}

const useLogin = (): UseLogin => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const valid = useMemo(() => email.length > 0 && password.length > 0, [email, password]);

	const handleChange = useCallback((value: string, action: 'email' | 'password') => {
		switch (action) {
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;
		}
	}, []);

	const handleLogin = useCallback(async () => {
		await auth().signInWithEmailAndPassword(email, password);
	}, [email, password]);

	return { valid, handleChange, handleLogin };
};

export default useLogin;
