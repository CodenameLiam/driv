import styled, { css } from '@emotion/native';
import Colours from 'Theme/Colours';
import { fontWeight, fontFamily, SubFont } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

// ---------------------------------------------------------------
// Page container
// ---------------------------------------------------------------
export const Container = styled.View`
	flex: 1;
	align-items: center;
	padding: ${Responsive.hpx(3)};
`;

// ---------------------------------------------------------------
// Title elements
// ---------------------------------------------------------------
export const TitleContainer = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: ${Responsive.hpx(10)};
	margin-bottom: ${Responsive.hpx(6)};
`;

export const TitleIcon = css`
	margin-right: ${Responsive.hpx(1)};
`;

// ---------------------------------------------------------------
// Input elements
// ---------------------------------------------------------------
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

// ---------------------------------------------------------------
// Icon elements
// ---------------------------------------------------------------
export const IconContainer = styled.View`
	flex-direction: row;
	position: absolute;
	right: ${Responsive.hpx(2)};
`;

export const Button = css`
	margin: ${Responsive.hpx(1)} 0px;
`;

// ---------------------------------------------------------------
// Other containers
// ---------------------------------------------------------------
export const ForgotContainer = styled.TouchableOpacity`
	margin-top: ${Responsive.hpx(2)};
`;

export const BottomTextContainer = styled.TouchableOpacity`
	margin-top: auto;
	flex-direction: row;
	align-items: center;
`;

export const BackContainer = styled.View`
	position: absolute;
	left: ${Responsive.hpx(3)};
	top: ${Responsive.hpx(3)};
`;
