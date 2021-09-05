import styled from '@emotion/native';
import React from 'react';
import { BaseToastProps } from 'react-native-toast-message';
import Colours from 'Theme/Colours';
import { fontFamily } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

interface ToastContainerProps {
	colour: string;
}

const ToastContainer = styled.View<ToastContainerProps>`
	position: relative;
	overflow: hidden;
	width: 90%;
	border-radius: ${Responsive.hpx(1)};
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${({ colour }) => colour};
`;

const ToastHighlight = styled.View<ToastContainerProps>`
	background-color: ${({ colour }) => colour};
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: ${Responsive.hpx(1.5)};
`;

const ToastText = styled.Text<ToastContainerProps>`
	font-weight: 600;
	font-family: ${fontFamily};
	color: ${({ colour }) => colour};
	padding: ${Responsive.hpx(1)};
	padding-left: ${Responsive.hpx(1.5)};
`;

export const ToastConfig = {
	success: ({ text1, ...rest }: BaseToastProps) => (
		<ToastContainer colour={Colours.black}>
			<ToastHighlight colour={Colours.green} />
			<ToastText colour={Colours.white}>{text1}</ToastText>
		</ToastContainer>
	),
	error: ({ text1, ...rest }: BaseToastProps) => (
		<ToastContainer colour={Colours.black}>
			<ToastHighlight colour={Colours.red} />
			<ToastText colour={Colours.white}>{text1}</ToastText>
		</ToastContainer>
	),
};

export default ToastConfig;
