import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from 'Navigation/RootNavigation/RootNavigation';
import AppContextProvider from 'Context/AppContext';
import Toast from 'react-native-toast-message';
import ToastConfig from 'Components/Toast/Toast';
import { StatusBar } from 'react-native';

const App: FC = () => {
	return (
		<AppContextProvider>
			{/* <StatusBar barStyle="dark-content" /> */}
			<NavigationContainer>
				<RootNavigation />
			</NavigationContainer>
			<Toast ref={ref => Toast.setRef(ref)} config={ToastConfig} />
		</AppContextProvider>
	);
};

export default App;
