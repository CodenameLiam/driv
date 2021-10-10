import React, { FC } from 'react';
import { BodyFont, TitleFont } from 'Theme/Fonts';
import * as Styles from './Interaction.styles';

export interface InteractionProps {
	colour: string;
	title: string;
	number: number;
}

const Interaction: FC<InteractionProps> = ({ colour, title, number }) => {
	return (
		<Styles.Container colour={colour}>
			<Styles.Title colour={colour}>{title}</Styles.Title>
			<Styles.Number colour={colour}>{number}</Styles.Number>
		</Styles.Container>
	);
};

export default Interaction;
