import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

const CreateScreen: FC = () => {
	return (
		<SafeAreaView>
			<Text style={{ fontFamily: 'Poppins-Black' }}>Auth</Text>
			<TouchableOpacity
				onPress={() => auth().signInWithEmailAndPassword('liampercy123@gmail.com', 'GoogleBUDDY123!')}
			>
				<Text>Login</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default CreateScreen;
