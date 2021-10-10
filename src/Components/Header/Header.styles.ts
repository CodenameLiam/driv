import styled from '@emotion/native';
import { Platform } from 'react-native';
import Colours from 'Theme/Colours';
import { fontFamilyBold, TitleFont } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	padding: ${Responsive.hpx(2)};
	background-color: ${Colours.Greys.GREY0};
`;

interface TitleProps {
	centered?: boolean;
}

export const Title = styled(TitleFont)<TitleProps>`
	font-size: ${Responsive.hpx(5)};
	font-family: ${fontFamilyBold};
	flex: 1;
	text-align: ${({ centered }) => (centered ? 'center' : 'left')};
`;

export const IconContainer = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
	height: ${Responsive.hpx(6)};
	width: ${Responsive.hpx(6)};
	border-radius: 200px;
	background-color: ${Colours.Greys.GREY1};
	margin: 0px ${Responsive.hpx(0.25)};
`;

export const IconNotification = styled.View`
	position: absolute;
	top: -${Responsive.hpx(0.5)};
	right: -${Responsive.hpx(0.5)};
	align-items: center;
	justify-content: center;
	height: ${Responsive.hpx(2.5)};
	width: ${Responsive.hpx(2.5)};
	border-radius: 200px;
	background-color: ${Colours.primary};
`;

export const BackContainer = styled.TouchableOpacity`
	position: absolute;
	padding: ${Responsive.hpx(2)};
	z-index: 999;
`;
