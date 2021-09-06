import styled from '@emotion/native';
import { StyleSheet } from 'react-native';
import Colours from 'Theme/Colours';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	background-color: ${Colours.white};
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-radius: ${Responsive.hpx(100)};
	margin: ${Responsive.hpx(5)} ${Responsive.wpx(18)};
`;

/* padding: 0px ${Responsive.hpx(2)}; */
export const ContainerShadow = StyleSheet.create({
	shadow: { shadowColor: Colours.grey, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1 },
});

export const IconButton = styled.TouchableOpacity`
	padding: ${Responsive.hpx(1)};
`;

interface IconContainerProps {
	active?: boolean;
}

export const IconContainer = styled.View<IconContainerProps>`
	background-color: ${({ active }) => (active ? Colours.grey : Colours.white)};
	padding: ${Responsive.hpx(1.25)};
	border-radius: 200px;
`;

export const AddContainer = styled.View`
	justify-content: center;
	align-items: center;
	position: relative;
`;

const ButtonDimensions = Responsive.hpx(10);
const WrapperDimensions = Responsive.hpx(11);

export const AddWrapper = styled.View`
	position: absolute;
	background-color: ${Colours.white};
	width: ${WrapperDimensions};
	height: ${WrapperDimensions};
	border-radius: ${WrapperDimensions};
`;

export const AddButton = styled.TouchableOpacity`
	position: absolute;
	overflow: hidden;
	justify-content: center;
	align-items: center;
	width: ${ButtonDimensions};
	height: ${ButtonDimensions};
	border-radius: ${ButtonDimensions};
`;
