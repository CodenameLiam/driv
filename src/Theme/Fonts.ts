import styled from '@emotion/native';
import Responsive from 'Utils/Responsive';
import Colours from './Colours';

interface FontProps {
	colour?: string;
}

export const fontFamily = 'Poppins-Medium';
export const fontFamilyBold = 'Poppins-SemiBold';

export const BodyFont = styled.Text<FontProps>`
	font-family: ${fontFamily};
	font-size: ${Responsive.hpx(2)};
	color: ${props => props.colour ?? Colours.black};
`;

export const TitleFont = styled(BodyFont)`
	font-size: ${Responsive.hpx(4)};
	font-family: ${fontFamilyBold};
`;

export const SubFont = styled(BodyFont)`
	font-size: ${Responsive.hpx(1.6)};
`;

export const SubFontBold = styled(SubFont)`
	font-family: ${fontFamilyBold};
`;
