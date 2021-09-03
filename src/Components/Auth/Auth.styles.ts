import styled, { css } from '@emotion/native';
import Colours from 'Theme/Colours';
import { fontWeight, fontFamily } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	padding: ${Responsive.hpx(3)};
`;

export const TitleContainer = styled.View`
	flex-direction: row;
	align-items: center;
	margin: ${Responsive.hpx(5)} 0px;
`;

export const InputContainer = styled.View`
	justify-content: center;
	width: 100%;
	height: ${Responsive.hpx(7)};
	padding: 0px ${Responsive.hpx(1.5)};
	border-radius: ${Responsive.hpx(1)};
	margin-bottom: ${Responsive.hpx(2)};
	background-color: ${Colours.grey};
`;

export const Input = styled.TextInput`
	flex: 1;
	font-weight: ${fontWeight};
	font-family: ${fontFamily};
	font-size: ${Responsive.hpx(2)};
	color: ${Colours.primary};
`;

export const IconContainer = styled.View`
	flex-direction: row;
	position: absolute;
	right: ${Responsive.hpx(2)};
`;

export const Button = css`
	margin: ${Responsive.hpx(1)} 0px;
`;
