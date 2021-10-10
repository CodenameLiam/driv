import styled from '@emotion/native';
import { BodyFont, TitleFont } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';
import { InteractionProps } from './Interaction';

export const Container = styled.View<Pick<InteractionProps, 'colour'>>`
	width: 32%;
	aspect-ratio: 1;
	border-radius: ${Responsive.hpx(2)};
	background-color: ${({ colour }) => colour + 20};
	padding: ${Responsive.hpx(3.5)} ${Responsive.hpx(2)};
	align-items: center;
	justify-content: center;
`;

export const Title = styled(BodyFont)`
	text-align: center;
	font-size: ${Responsive.hpx(1.8)};
`;

export const Number = styled(TitleFont)`
	text-align: center;
	font-size: ${Responsive.hpx(5.5)};
`;
