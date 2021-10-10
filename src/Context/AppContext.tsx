import React, { createContext, FC, useContext, Dispatch, SetStateAction, useState } from 'react';
import { AuthState, AuthAction } from 'Reducers/AuthReducer';
import useAuth from 'Hooks/useAuth';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spinner from 'react-native-spinkit';
import Responsive from 'Utils/Responsive';
import Colours from 'Theme/Colours';
import PageLoading from 'Components/Loading/PageLoading';

/* Interface for the app context */
interface AppContextState {
	refresh: [boolean, Dispatch<SetStateAction<boolean>>];
	name: [string | null, Dispatch<SetStateAction<string | null>>];
	user: [AuthState, Dispatch<AuthAction>];
}

/* Default app context state */
const DEFAULT_APP_STATE: AppContextState = {
	name: [null, () => {}],
	user: [null, () => {}],
	refresh: [false, () => {}],
};

/* Creating the context */
export const AppContext = createContext<AppContextState>(DEFAULT_APP_STATE);

/* The context provider */
const AppContextProvider: FC = ({ children }) => {
	const [name, setName] = useState<string | null>(null);
	const [refresh, setRefresh] = useState(false);
	/* Check for user authentication */
	const { loading, user, dispatchUser } = useAuth();

	if (loading) {
		return <PageLoading />;
	}

	return (
		<AppContext.Provider
			value={{
				refresh: [refresh, setRefresh],
				name: [name, setName],
				user: [user, dispatchUser],
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;

/* Obtains the current user from the context */
export const useUser = (): [AuthState, Dispatch<AuthAction>] => {
	return useContext(AppContext).user;
};

/* Obtains the display name of the user from the context */
export const useName = (): [string | null, Dispatch<SetStateAction<string | null>>] => {
	return useContext(AppContext).name;
};

export const useRefresh = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
	return useContext(AppContext).refresh;
};
