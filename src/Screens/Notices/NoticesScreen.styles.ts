import styled from '@emotion/native';
import Colours from 'Theme/Colours';
import { BodyFont } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	padding: 0px ${Responsive.hpx(2)};

	flex: 1;
`;

export const Placeholder = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const NotificationRow = styled.View`
	border-bottom-width: 1px;
	border-color: ${Colours.Greys.GREY1};
	padding: ${Responsive.hpx(1)};
`;

export const NotificationTitle = styled.View`
	flex-direction: row;
	align-items: center;
`;

interface UnreadColour {
	colour: string;
}

export const NotificationUnread = styled.View<UnreadColour>`
	margin-left: ${Responsive.hpx(0.5)};
	width: ${Responsive.hpx(1)};
	aspect-ratio: 1;
	border-radius: 100px;
	background-color: ${({ colour }) => colour};
`;
