import styled from '@emotion/native';
import Responsive from 'Utils/Responsive';
import Colours from './Colours';

interface FontProps {
	colour?: string;
}

export const fontFamily = 'Poppins';
export const fontWeight = '600';
export const fontHeaderWeight = '700';

export const BodyFont = styled.Text<FontProps>`
	font-weight: ${fontWeight};
	font-family: ${fontFamily};
	font-size: ${Responsive.hpx(1.75)};
	color: ${props => props.colour ?? Colours.dark};
`;

export const TitleFont = styled(BodyFont)`
	font-size: ${Responsive.hpx(3)};
	font-weight: ${fontHeaderWeight};
`;
