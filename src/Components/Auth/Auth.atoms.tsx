import Icon from 'Components/Icon/Icon';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Colours from 'Theme/Colours';
import Responsive from 'Utils/Responsive';

export const Check: FC = () => <Icon family="fontawesome" name="check" size={22} colour={Colours.green} />;

interface EyeProps {
	open: boolean;
	onPress: () => void;
}
export const Eye: FC<EyeProps> = ({ open, onPress }) => (
	<TouchableOpacity onPress={onPress}>
		<Icon
			family="feather"
			name={open ? 'eye' : 'eye-off'}
			size={22}
			colour={Colours.primary}
			style={{ marginLeft: Responsive.h(1) }}
		/>
	</TouchableOpacity>
);
