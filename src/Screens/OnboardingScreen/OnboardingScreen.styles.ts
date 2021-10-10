import styled from '@emotion/native';
import Colours from 'Theme/Colours';
import { BodyFont, fontFamily, fontFamilyBold } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	padding: ${Responsive.hpx(3)};
`;

export const TitleContainer = styled.View`
	align-items: center;
	margin-top: ${Responsive.hpx(10)};
	margin-bottom: ${Responsive.hpx(2)};
`;

export const SubTitleFont = styled(BodyFont)`
	text-align: center;
	font-size: ${Responsive.hpx(2.2)};
	margin-top: ${Responsive.hpx(1)};
	margin-bottom: ${Responsive.hpx(4)};
`;

export const InputContainer = styled.View`
	justify-content: center;
	width: 80%;
	height: ${Responsive.hpx(9)};
	padding: 0px ${Responsive.hpx(1.5)};
	border-radius: ${Responsive.hpx(1)};
	margin-bottom: ${Responsive.hpx(2)};
	background-color: ${Colours.grey};
`;

export const Input = styled.TextInput`
	flex: 1;
	padding-vertical: 0px;
	font-family: ${fontFamilyBold};
	font-size: ${Responsive.hpx(5)};

	color: ${Colours.black};
`;

export const BackContainer = styled.TouchableOpacity`
	position: absolute;
	padding: ${Responsive.hpx(2)};
	left: 0;
	top: 0;
`;

export const IconContainer = styled.View`
	flex-direction: row;
	position: absolute;
	right: ${Responsive.hpx(2)};
`;
