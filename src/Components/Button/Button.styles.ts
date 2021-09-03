import styled from '@emotion/native';
import Responsive from 'Utils/Responsive';

interface ButtonProps {
	fullWidth?: boolean;
}

export const Base = styled.TouchableOpacity<ButtonProps>`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	padding: 0px 20px;
	border-radius: ${Responsive.hpx(20)};
	height: ${Responsive.hpx(7)};
	${({ fullWidth }) => (fullWidth ? 'width: 100%' : '')};
`;
