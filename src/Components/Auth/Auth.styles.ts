import styled from '@emotion/native';
import Colours from 'Theme/Colours';
import { fontWeight, fontFamily } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	flex: 1;
	align-items: center;
`;

export const TitleContainer = styled.View`
	margin: ${Responsive.hpx(8)} 0px;
`;

export const InputContainer = styled.View`
	justify-content: center;
	width: 90%;
	height: ${Responsive.hpx(7)};
	padding: 0px ${Responsive.hpx(1.5)};
	border-radius: ${Responsive.hpx(1)};
	margin-bottom: ${Responsive.hpx(2)};
	background-color: ${Colours.grey};
`;

export const Input = styled.TextInput`
	font-weight: ${fontWeight};
	font-family: ${fontFamily};
	font-size: ${Responsive.hpx(1.75)};
	color: ${Colours.dark};
`;
