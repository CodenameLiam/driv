import React, { FC } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import Colours from 'Theme/Colours';
import { BodyFont, TitleFont } from 'Theme/Fonts';
import * as Styles from 'Components/Auth/Auth.styles';
import { Full } from 'Theme/Global';

const CreateScreen: FC = () => {
	return (
		<SafeAreaView style={Full}>
			<ScrollView contentContainerStyle={Full} keyboardShouldPersistTaps="handled" scrollEnabled={false}>
				<Styles.Container>
					<Styles.TitleContainer>
						<TitleFont>Create Account</TitleFont>
					</Styles.TitleContainer>

					<Styles.InputContainer>
						<Styles.Input placeholder="Name" />
					</Styles.InputContainer>
					<Styles.InputContainer>
						<Styles.Input placeholder="Email" />
					</Styles.InputContainer>
					<Styles.InputContainer>
						<Styles.Input placeholder="Password" secureTextEntry />
					</Styles.InputContainer>
				</Styles.Container>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CreateScreen;

{
	/* <View style={{ width: '100%', height: 40, backgroundColor:  }}>
				<TextInput style={{ flex: 1 }}></TextInput>
				<Text style={{ position: 'absolute' }}>Bruhsdfdf</Text>
			</View> */
}

{
	/* <View style={{ height: 60, width: '90%' }}>
				<LinearGradient
					style={StyleSheet.absoluteFill}
					colors={[Colours.light, Colours.dark]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
				/>
			</View>
			<Text style={{ fontFamily: 'Poppins-Black' }}>Auth</Text>
			<TouchableOpacity
				onPress={() => auth().signInWithEmailAndPassword('liampercy123@gmail.com', 'GoogleBUDDY123!')}
			>
				<Text>Login</Text>
			</TouchableOpacity> */
}
