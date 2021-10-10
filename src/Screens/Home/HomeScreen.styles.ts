import styled from '@emotion/native';
import { Row } from 'Screens/Profile/ProfileScreen.styles';
import { TitleFont } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	padding: ${Responsive.hpx(2)};
`;

export const RowHeader = styled(Row)`
	margin-top: ${Responsive.hpx(2)};
`;

export const Title = styled(TitleFont)`
	font-size: ${Responsive.wpx(6)};
`;

export const InteractionContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: ${Responsive.hpx(1)} 0px;
`;
