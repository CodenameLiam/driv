import styled from '@emotion/native';
import Colours from 'Theme/Colours';
import { fontFamily } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	padding: ${Responsive.hpx(3)};
`;

const pictureDimensions = Responsive.wpx(50);

export const Picture = styled.Image`
	height: ${pictureDimensions};
	width: ${pictureDimensions};
	border-radius: 200px;
`;

export const PicturePlaceholder = styled.View`
	height: ${pictureDimensions};
	width: ${pictureDimensions};
	border-radius: 200px;
	background-color: ${Colours.Greys.GREY1};
	align-items: center;
	justify-content: center;
`;

export const ButtonContainer = styled.View`
	margin-top: auto;
	width: 100%;
`;

const editPictureDimensions = Responsive.wpx(10);

export const EditPicture = styled.View`
	height: ${editPictureDimensions};
	width: ${editPictureDimensions};
	border-radius: 100px;
	background: ${Colours.primary};
	position: absolute;
	bottom: ${Responsive.wpx(2)};
	right: ${Responsive.wpx(2)};
	justify-content: center;
	align-items: center;
`;

// ---------------------------------------------------------------
// Input elements
// ---------------------------------------------------------------
export const InputContainer = styled.View`
	justify-content: center;
	width: 100%;
	height: ${Responsive.hpx(7)};
	padding: 0px ${Responsive.hpx(1.5)};
	border-radius: ${Responsive.hpx(1)};
	margin-bottom: ${Responsive.hpx(2)};
	background-color: ${Colours.grey};
`;

export const Input = styled.TextInput`
	flex: 1;
	font-family: ${fontFamily};
	font-size: ${Responsive.hpx(2)};
	color: ${Colours.black};
`;
