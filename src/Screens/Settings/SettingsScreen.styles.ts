import styled from '@emotion/native';
import Colours from 'Theme/Colours';
import { BodyFont, TitleFont } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

export const SettingsGroup = styled.View`
	border-top-width: 1px;
	border-top-color: ${Colours.Greys.GREY1};
	padding: ${Responsive.hpx(1)};
`;

export const SettingsButton = styled.TouchableOpacity`
	flex-grow: 1;
	padding: ${Responsive.hpx(2)} ${Responsive.hpx(1)};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const SettingsFont = styled(BodyFont)`
	font-size: ${Responsive.wpx(5)};
`;

export const InfoContainer = styled.View`
	padding: ${Responsive.hpx(1)} ${Responsive.hpx(2)};
	flex-direction: row;
	margin-bottom: ${Responsive.hpx(2)};
	align-items: center;
`;

const pictureDimensions = Responsive.hpx(7);

export const Picture = styled.Image`
	height: ${pictureDimensions};
	width: ${pictureDimensions};
	border-radius: 100px;
`;

export const PicturePlaceholder = styled.View`
	height: ${pictureDimensions};
	width: ${pictureDimensions};
	border-radius: 100px;
	background-color: ${Colours.Greys.GREY1};
	align-items: center;
	justify-content: center;
`;

export const TextContainer = styled.View`
	margin-left: ${Responsive.hpx(2)};
`;

export const Name = styled(TitleFont)`
	font-size: ${Responsive.wpx(6)};
`;
