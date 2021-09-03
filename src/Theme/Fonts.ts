import styled from '@emotion/native';
import Responsive from 'Utils/Responsive';
import Colours from './Colours';

interface FontProps {
	colour?: string;
}

export const fontFamily = 'Poppins';
export const fontWeight = '500';
export const fontHeaderWeight = '600';

export const BodyFont = styled.Text<FontProps>`
	font-weight: ${fontWeight};
	font-family: ${fontFamily};
	font-size: ${Responsive.hpx(2)};
	color: ${props => props.colour ?? Colours.dark};
`;

export const TitleFont = styled(BodyFont)`
	margin-left: ${Responsive.hpx(1)};
	font-size: ${Responsive.hpx(3)};
	font-weight: ${fontHeaderWeight};
`;
