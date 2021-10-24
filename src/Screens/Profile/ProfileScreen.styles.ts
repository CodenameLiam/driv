import styled, { css } from '@emotion/native';
import Colours from 'Theme/Colours';
import { TitleFont } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	padding: ${Responsive.hpx(2)};
`;

export const InfoContainer = styled.View`
	flex-direction: row;
	margin-bottom: ${Responsive.hpx(2)};
`;

const pictureDimensions = Responsive.hpx(10);

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

export const InfoTextContainer = styled.View`
	flex: 1;
	margin-left: ${Responsive.hpx(1)};
	justify-content: flex-end;
`;

export const Name = styled(TitleFont)`
	font-size: ${Responsive.wpx(6)};
`;

export const Stars = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const StarIcon = css`
	margin-left: ${Responsive.hpx(0.5)};
`;

export const Row = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
`;

export const RowHeader = styled(Row)`
	margin-top: ${Responsive.hpx(2)};
`;

export const RowContent = styled(Row)`
	margin-top: ${Responsive.hpx(1)};
`;

interface TileProps {
	colour: string;
}

export const Tile = styled.View<TileProps>`
	padding: ${Responsive.hpx(1)};
	border-radius: ${Responsive.hpx(1)};
	background-color: ${({ colour }) => colour + 20};
`;

export const RegoTile = styled(Tile)`
	margin-left: ${Responsive.hpx(2)};
`;

export const AttributeTile = styled(Tile)`
	margin-right: ${Responsive.hpx(1)};
	margin-bottom: ${Responsive.hpx(1)};
`;

export const InteractionContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: ${Responsive.hpx(1)} 0px;
`;
