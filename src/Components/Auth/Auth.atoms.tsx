import { useNavigation } from '@react-navigation/core';
import Icon from 'Components/Icon/Icon';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Colours from 'Theme/Colours';
import Responsive from 'Utils/Responsive';

export const Check: FC = () => (
	<Icon family="fontawesome" name="check" size={Responsive.h(2.5)} colour={Colours.green} />
);

interface EyeProps {
	open: boolean;
	onPress: () => void;
}

export const Eye: FC<EyeProps> = ({ open, onPress }) => (
	<TouchableOpacity onPress={onPress}>
		<Icon
			family="feather"
			name={open ? 'eye' : 'eye-off'}
			size={Responsive.h(2.5)}
			colour={Colours.black}
			style={{ marginLeft: Responsive.h(1) }}
		/>
	</TouchableOpacity>
);

export const Back: FC = () => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon family="feather" name={'chevron-left'} size={Responsive.h(4)} colour={Colours.black} />
		</TouchableOpacity>
	);
};
