import styled from '@emotion/native';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: 0 ${Responsive.hpx(3)};
`;

export const EmailContainer = styled.View`
	aspect-ratio: 1;
	justify-content: center;
	align-items: center;
	width: ${Responsive.wpx(60)};
	border-radius: ${Responsive.wpx(200)};
	overflow: hidden;
`;
