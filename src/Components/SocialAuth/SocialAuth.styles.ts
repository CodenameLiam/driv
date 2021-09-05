import styled, { css } from '@emotion/native';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	flex-direction: row;
`;

interface SocialContainerProps {
	dimensions: string;
	colour: string;
}

export const SocialContainer = styled.TouchableOpacity<SocialContainerProps>`
	margin: ${Responsive.hpx(1)};
	justify-content: center;
	align-items: center;
	width: ${({ dimensions }) => dimensions};
	height: ${({ dimensions }) => dimensions};
	border-radius: ${({ dimensions }) => dimensions};
	background-color: ${({ colour }) => colour};
`;

export const Apple = css`
	top: ${Responsive.hpx(-0.1)};
`;

export const Facebook = css`
	top: ${Responsive.hpx(-0.3)};
	left: ${Responsive.hpx(-0.1)};
`;
