import Toast from 'react-native-toast-message';

const info = (message: string): void => {
	Toast.show({
		type: 'info',
		text1: message,
		position: 'bottom',
	});
};

const error = (message: string): void => {
	Toast.show({
		type: 'error',
		text1: message,
		position: 'bottom',
	});
};

const success = (message: string): void => {
	Toast.show({
		text1: message,
		type: 'success',
		position: 'bottom',
	});
};

export const Snack = {
	info,
	error,
	success,
};
