import { Snack } from 'Components/Snack/Snack';
import auth from '@react-native-firebase/auth';
import appleAuth from '@invertase/react-native-apple-authentication';
import { useCallback, useState } from 'react';

type Provider = 'apple' | 'google';

interface UseSocialAuth {
	showSpinner: boolean;
	handleSocialPress: (provider: Provider) => Promise<void>;
}

const appleSignIn = async (): Promise<void> => {
	const appleAuthRequestResponse = await appleAuth.performRequest({
		requestedOperation: appleAuth.Operation.LOGIN,
		requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
	});

	if (!appleAuthRequestResponse.identityToken) {
		throw 'Apple Sign-In failed - no identify token returned';
	}

	// Create a Firebase credential from the response
	const { identityToken, nonce } = appleAuthRequestResponse;
	const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

	// Sign the user in with the credential
	await auth().signInWithCredential(appleCredential);
};

// const facebookSignIn = (): Promise<void> => {
// 	// Attempt login with permissions
// 	const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

// 	if (result.isCancelled) {
// 		throw 'User cancelled the login process';
// 	}

// 	// Once signed in, get the users AccesToken
// 	const data = await AccessToken.getCurrentAccessToken();

// 	if (!data) {
// 		throw 'Something went wrong obtaining access token';
// 	}

// 	// Create a Firebase credential with the AccessToken
// 	const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// 	// Sign-in the user with the credential
// 	return auth().signInWithCredential(facebookCredential);
// };

const useSocialAuth = (): UseSocialAuth => {
	const [showSpinner, setShowSpinner] = useState(false);

	const handleSocialPress = useCallback(async (provider: Provider) => {
		setShowSpinner(true);
		try {
			switch (provider) {
				case 'apple':
					await appleSignIn();
					break;
			}
		} catch (error) {
			error instanceof Error && Snack.error(error.message);
			setShowSpinner(false);
		}
	}, []);

	return { showSpinner, handleSocialPress };
};

export default useSocialAuth;
