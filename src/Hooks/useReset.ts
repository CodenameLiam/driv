import { Snack } from 'Components/Snack/Snack';
import { useState, useMemo, useCallback, Dispatch, SetStateAction } from 'react';
import auth from '@react-native-firebase/auth';

interface UseReset {
	showSpinner: boolean;
	valid: boolean;
	setEmail: Dispatch<SetStateAction<string>>;
	handleReset: () => Promise<void>;
}

const useReset = (): UseReset => {
	const [showSpinner, setShowSpinner] = useState(false);
	const [email, setEmail] = useState('');
	const valid = useMemo(() => email.length > 0, [email]);

	const handleReset = useCallback(async () => {
		setShowSpinner(true);
		try {
			await auth().sendPasswordResetEmail(email);
			Snack.success('Reset password link sent');
		} catch (error) {
			error instanceof Error && Snack.error(error.message);
		}
		setShowSpinner(false);
	}, [email]);

	return { showSpinner, valid, setEmail, handleReset };
};

export default useReset;
