import styled from '@emotion/native';
import Colours from 'Theme/Colours';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	flex-direction: row;
	margin-right: ${Responsive.hpx(1)};
`;

/* padding: ${Responsive.hpx(1.5)}; */

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
