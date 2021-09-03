import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colours from 'Theme/Colours';
import { BodyFont } from 'Theme/Fonts';
import * as Styles from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
	text: string;
	fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({ text, fullWidth, disabled, ...rest }) => {
	console.log(disabled);
	return (
		<Styles.Base fullWidth={fullWidth} disabled={disabled} {...rest}>
			<LinearGradient
				style={[StyleSheet.absoluteFill, { opacity: disabled ? 0.5 : 1 }]}
				colors={[Colours.light, Colours.dark]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
			/>
			<BodyFont colour={Colours.grey}>{text}</BodyFont>
		</Styles.Base>
	);
};

export default Button;
