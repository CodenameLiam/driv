import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from 'Navigation/RootNavigation/RootNavigation';
import AppContextProvider from 'Context/AppContext';
import Toast from 'react-native-toast-message';
import ToastConfig from 'Components/Toast/Toast';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { StatusBar } from 'react-native';
import { NavTheme } from 'Theme/Theme';

GoogleSignin.configure({
	webClientId: '291287569224-49vj6val8t5bn70214tueanih7sks54v.apps.googleusercontent.com',
});

const App: FC = () => {
	return (
		<AppContextProvider>
			<StatusBar barStyle="dark-content" />
			<NavigationContainer theme={NavTheme}>
				<RootNavigation />
				<Toast ref={ref => Toast.setRef(ref)} config={ToastConfig} />
			</NavigationContainer>
		</AppContextProvider>
	);
};

export default App;
