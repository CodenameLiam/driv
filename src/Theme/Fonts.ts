import styled from '@emotion/native';
import Responsive from 'Utils/Responsive';
import Colours from './Colours';

interface FontProps {
	bold?: boolean;
	colour?: string;
}

export const fontFamily = 'Poppins-Medium';
export const fontFamilyBold = 'Poppins-SemiBold';

export const BodyFont = styled.Text<FontProps>`
	font-family: ${({ bold }) => (bold ? fontFamilyBold : fontFamily)};
	font-size: ${Responsive.hpx(1.8)};
	color: ${props => props.colour ?? Colours.black};
	padding: 0px;
	include-font-padding: false;
`;

export const TitleFont = styled(BodyFont)`
	font-size: ${Responsive.hpx(3.5)};
	font-family: ${fontFamilyBold};
`;

export const SubFont = styled(BodyFont)`
	font-size: ${Responsive.hpx(1.6)};
`;

export const SubFontBold = styled(SubFont)`
	font-family: ${fontFamilyBold};
`;
