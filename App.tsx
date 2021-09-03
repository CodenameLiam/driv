import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from 'Navigation/RootNavigation/RootNavigation';
import useAuth from 'Hooks/useAuth';
import AppContextProvider from 'Context/AppContext';

const App: FC = () => {
	return (
		<AppContextProvider>
			<NavigationContainer>
				<RootNavigation />
			</NavigationContainer>
		</AppContextProvider>
	);
};

export default App;

{
	/* <Stack.Navigator
        screenOptions={{
          presentation: 'modal',
          headerShadowVisible: false,
          header: () => (
            <View
              style={[
                {
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 50,
                  backgroundColor: 'red',
                },
              ]}></View>
          ),
        }}>
        <Stack.Screen name="Home" component={Test} />
        <Stack.Screen name="Home2" component={Test2} />
        <Stack.Screen name="Home3" component={Test3} />
      </Stack.Navigator> */
}
