import { InteractionType } from 'Types/Interaction';
import Colours from 'Theme/Colours';

export const getInteractionColour = (type: InteractionType): string => {
	if (type === InteractionType.Positive) {
		return Colours.green;
	} else if (type === InteractionType.Negative) {
		return Colours.orange;
	} else {
		return Colours.red;
	}
};
