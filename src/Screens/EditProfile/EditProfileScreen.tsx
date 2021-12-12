import Block from 'Components/Block/Block';
import Button from 'Components/Button/Button';
import Icon from 'Components/Icon/Icon';
import { useUser } from 'Context/AppContext';
import React, { FC, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';
import Colours from 'Theme/Colours';
import { BodyFont } from 'Theme/Fonts';
import { Full } from 'Theme/Global';
import Responsive from 'Utils/Responsive';
import * as Styles from './EditProfileScreen.styles';
import auth from '@react-native-firebase/auth';
import AuthReducer from 'Reducers/AuthReducer';
import { Snack } from 'Components/Snack/Snack';
import ToastConfig from 'Components/Toast/Toast';
import Toast from 'react-native-toast-message';

const EditProfileScreen: FC = () => {
	const [user, dispatchUser] = useUser();
	const [picture, setPicture] = useState<string | null | undefined>(user?.user?.photoURL);
	const [name, setName] = useState<string>(user?.user?.displayName ?? '');

	const handlePicture = async (): Promise<void> => {
		const result = await launchImageLibrary({
			mediaType: 'photo',
		});

		if (!result.didCancel) {
			setPicture(result.assets?.[0].uri);
		}
	};

	const handleSave = async (): Promise<void> => {
		try {
			await auth().currentUser?.updateProfile({ displayName: name, photoURL: picture });
			const _user = auth().currentUser;
			_user && dispatchUser(AuthReducer.actions.user(_user));
			Snack.success('Account updated');
		} catch (error) {
			Snack.error((error as Error).message);
		}
	};

	return (
		<SafeAreaView style={Full}>
			<Styles.Container>
				<Block marginBottom={Responsive.h(1)}>
					<TouchableOpacity onPress={handlePicture}>
						{picture ? (
							<Styles.Picture source={{ uri: picture }} />
						) : (
							<Styles.PicturePlaceholder>
								<Icon
									family="fontawesome"
									name="camera"
									size={Responsive.h(8)}
									colour={Colours.Greys.GREY2}
								/>
							</Styles.PicturePlaceholder>
						)}
						<Styles.EditPicture>
							<Icon family="feather" name="edit-2" size={Responsive.w(4)} colour={Colours.white} />
						</Styles.EditPicture>
					</TouchableOpacity>
				</Block>
				<Block fullWidth marginLeft={2} marginBottom={Responsive.h(0.2)}>
					<BodyFont>Name:</BodyFont>
				</Block>
				<Styles.InputContainer>
					<Styles.Input
						placeholder="Name"
						placeholderTextColor={Colours.Greys.GREY3}
						returnKeyType="done"
						autoCapitalize="words"
						blurOnSubmit={false}
						defaultValue={user?.user?.displayName ?? ''}
						onChangeText={setName}
					/>
				</Styles.InputContainer>

				<Styles.ButtonContainer>
					<Button text="Save" onPress={handleSave} />
				</Styles.ButtonContainer>
			</Styles.Container>
			<Toast config={ToastConfig} />
		</SafeAreaView>
	);
};

export default EditProfileScreen;
