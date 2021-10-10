import styled from '@emotion/native';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	height: ${Responsive.hpx(16)};
	border-radius: ${Responsive.hpx(2)};
	background-color: #fff;
	justify-content: center;
	align-items: center;
`;

export const RewardImage = styled.Image`
	height: 100%;
	width: 100%;
`;
