import styled from '@emotion/native';
import Colours from 'Theme/Colours';
import { BodyFont, TitleFont } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	padding: ${Responsive.hpx(2)};
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

export const RegoTile = styled.View`
	padding: ${Responsive.hpx(1)};
	border-radius: ${Responsive.hpx(1)};
	background-color: ${Colours.green + 20};
	align-self: flex-start;
`;

export const InfoContainer = styled.View`
	flex-direction: row;
	margin-bottom: ${Responsive.hpx(2)};
	align-items: center;
`;

export const InteractionAllContainer = styled.View`
	flex-direction: row;
`;

interface InteractionContainerProps {
	colour: string;
}

export const InteractionContainer = styled.View<InteractionContainerProps>`
	margin: ${Responsive.hpx(1)};
	padding: ${Responsive.hpx(1)};
	background-color: ${({ colour }) => colour + 20};
	border-radius: ${Responsive.hpx(1)};
	flex: 1;
`;

export const Title = styled(BodyFont)`
	text-align: center;
	font-size: ${Responsive.hpx(1.8)};
`;

export const Number = styled(TitleFont)`
	text-align: center;
	font-size: ${Responsive.hpx(5)};
`;

interface InteractionRowProps {
	isOdd?: boolean;
}

export const InteractionRow = styled.View<InteractionRowProps>`
	flex-direction: row;
	padding: ${Responsive.hpx(1)};
	background-color: ${({ isOdd }) => (isOdd ? Colours.grey : Colours.Greys.GREY0)};
	border-radius: ${Responsive.hpx(1)};
`;

interface InteractionCellProps {
	flex: number;
}

export const InteractionCell = styled.View<InteractionCellProps>`
	flex: ${({ flex }) => flex};
`;

export const InteractionHeaderFont = styled(TitleFont)`
	font-size: ${Responsive.hpx(2)};
	color: ${Colours.blue};
`;

export const InteractionBodyFont = styled(BodyFont)`
	font-size: ${Responsive.hpx(1.8)};
`;
