import { Snack } from 'Components/Snack/Snack';
import auth from '@react-native-firebase/auth';
import appleAuth from '@invertase/react-native-apple-authentication';
import { useCallback, useState } from 'react';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

type Provider = 'apple' | 'google' | 'facebook';

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

const facebookSignIn = async (): Promise<void> => {
	// Attempt login with permissions
	const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

	if (result.isCancelled) {
		throw 'User cancelled the login process';
	}

	// Once signed in, get the users AccesToken
	const data = await AccessToken.getCurrentAccessToken();

	if (!data) {
		throw 'Something went wrong obtaining access token';
	}

	// Create a Firebase credential with the AccessToken
	const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

	// Sign-in the user with the credential
	await auth().signInWithCredential(facebookCredential);
};

const googleSignIn = async (): Promise<void> => {
	// Get the users ID token
	const { idToken } = await GoogleSignin.signIn();

	// Create a Google credential with the token
	const googleCredential = auth.GoogleAuthProvider.credential(idToken);

	// Sign-in the user with the credential
	await auth().signInWithCredential(googleCredential);
};

const useSocialAuth = (): UseSocialAuth => {
	const [showSpinner, setShowSpinner] = useState(false);

	const handleSocialPress = useCallback(async (provider: Provider) => {
		setShowSpinner(true);
		try {
			switch (provider) {
				case 'apple':
					await appleSignIn();
					break;
				case 'facebook':
					await facebookSignIn();
					break;
				case 'google':
					await googleSignIn();
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
