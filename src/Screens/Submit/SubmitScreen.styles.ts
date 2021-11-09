import styled from '@emotion/native';
import Button from 'Components/Button/Button';
import Colours from 'Theme/Colours';
import { fontFamilyBold, SubFont, SubFontBold, TitleFont } from 'Theme/Fonts';
import Responsive from 'Utils/Responsive';

export const Container = styled.View`
	flex: 1;
	align-items: center;
`;

export const InputContainer = styled.View`
	justify-content: center;
	width: 80%;
	height: ${Responsive.hpx(9)};
	padding: 0px ${Responsive.hpx(1.5)};
	border-radius: ${Responsive.hpx(1)};
	margin-top: ${Responsive.hpx(6)};
	margin-bottom: ${Responsive.hpx(2)};
	background-color: ${Colours.grey};
`;

export const Input = styled.TextInput`
	flex: 1;
	padding: 0px;
	font-family: ${fontFamilyBold};
	font-size: ${Responsive.hpx(5)};
	color: ${Colours.black};
	include-font-padding: false;
`;

export const WarningText = styled(SubFontBold)`
	color: ${Colours.orange};
	position: absolute;
	bottom: -${Responsive.hpx(4)};
	align-self: center;
	text-align: center;
`;

export const IconContainer = styled.View`
	flex-direction: row;
	position: absolute;
	right: ${Responsive.hpx(2)};
`;

export const TypeButtonContainer = styled.View`
	flex-direction: row;
	justify-content: space-evenly;
	width: 80%;
	margin-top: ${Responsive.hpx(6)};
`;

interface TypeButtonProps {
	colour: string;
}

export const TypeButton = styled.TouchableOpacity<TypeButtonProps>`
	border-radius: ${Responsive.hpx(1)};
	height: ${Responsive.hpx(7)};
	width: 40%;
	background-color: ${({ colour }) => colour};
	align-items: center;
	justify-content: center;
`;

export const TypeButtonFont = styled(TitleFont)`
	font-size: ${Responsive.hpx(3)};
`;

export const SubTypeButtonContainer = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	margin-top: ${Responsive.hpx(2)};
	padding: ${Responsive.hpx(2)};
`;

export const SubTypeButton = styled.TouchableOpacity<TypeButtonProps>`
	padding: ${Responsive.hpx(1.5)};
	flex-grow: 1;
	align-items: center;
	margin: ${Responsive.hpx(0.5)};
	border-radius: ${Responsive.hpx(1)};
	background-color: ${({ colour }) => colour};
`;

export const SubmitButton = styled(Button)`
	margin: ${Responsive.hpx(4)};
	width: 60%;
	margin-top: auto;
`;
