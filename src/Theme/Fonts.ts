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
	color: ${props => props.colour ?? Colours.primary};
`;

export const TitleFont = styled(BodyFont)`
	font-size: ${Responsive.hpx(3)};
	font-weight: ${fontHeaderWeight};
`;

export const SubFont = styled(BodyFont)`
	font-size: ${Responsive.hpx(1.6)};
`;

export const SubFontBold = styled(SubFont)`
	font-weight: 600;
`;
