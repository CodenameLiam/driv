import styled, { css } from '@emotion/native';
import Button from 'Components/Button/Button';
import Colours from 'Theme/Colours';
import { fontFamily, fontFamilyBold, TitleFont } from 'Theme/Fonts';
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
export const CreateContainer = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: ${Responsive.hpx(5)};
	margin-bottom: ${Responsive.hpx(6)};
`;

export const TitleContainer = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: ${Responsive.hpx(10)};
	margin-bottom: ${Responsive.hpx(6)};
`;

export const TitleIcon = css`
	margin-right: ${Responsive.hpx(1)};
`;

export const TitleLogo = styled.Image`
	height: ${Responsive.wpx(20)};
	width: ${Responsive.wpx(20)};
`;

export const CreateFont = styled(TitleFont)`
	font-size: ${Responsive.wpx(10)};
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
	font-family: ${fontFamily};
	font-size: ${Responsive.hpx(2)};
	color: ${Colours.black};
`;

// ---------------------------------------------------------------
// Icon elements
// ---------------------------------------------------------------
export const IconContainer = styled.View`
	flex-direction: row;
	position: absolute;
	right: ${Responsive.hpx(2)};
`;

export const AuthButton = styled(Button)`
	margin-top: ${Responsive.hpx(1)};
`;

export const ForgotButton = styled.TouchableOpacity`
	padding: ${Responsive.hpx(1)};
`;

// ---------------------------------------------------------------
// Other containers
// ---------------------------------------------------------------
export const SubFontContainer = styled.View`
	margin: ${Responsive.hpx(3)} 0px;
`;

export const BottomTextContainer = styled.TouchableOpacity`
	position: absolute;
	bottom: ${Responsive.hpx(4)};
	padding: ${Responsive.hpx(1)};
	flex-direction: row;
	align-items: center;
`;

export const BackContainer = styled.View`
	position: absolute;
	left: ${Responsive.hpx(3)};
	top: ${Responsive.hpx(3)};
`;
