import { InteractionType, InteractionPositive, InteractionNegative, InteractionAttribute } from 'Types/Interaction';

export const Interactions: InteractionAttribute[] = [
	{
		type: InteractionType.Positive,
		subType: InteractionPositive.GoodDriver,
		text: 'Good Driver',
	},
	{
		type: InteractionType.Positive,
		subType: InteractionPositive.GoodSamaritan,
		text: 'Good Samaritan',
	},
	{
		type: InteractionType.Positive,
		subType: InteractionPositive.Helpful,
		text: 'Helpful',
	},
	{
		type: InteractionType.Positive,
		subType: InteractionPositive.Lawful,
		text: 'Lawful',
	},
	{
		type: InteractionType.Positive,
		subType: InteractionPositive.Patient,
		text: 'Patient',
	},

	{
		type: InteractionType.Positive,
		subType: InteractionPositive.WellMannered,
		text: 'Well Mannered',
	},
	{
		type: InteractionType.Positive,
		subType: InteractionPositive.Polite,
		text: 'Polite',
	},
	{
		type: InteractionType.Negative,
		subType: InteractionNegative.Crashed,
		text: 'Crashed',
	},
	{
		type: InteractionType.Negative,
		subType: InteractionNegative.CriminalActivity,
		text: 'Criminal Activity',
		severe: true,
	},
	{
		type: InteractionType.Negative,
		subType: InteractionNegative.HitAndRun,
		text: 'Hit & Run',
		severe: true,
	},
	{
		type: InteractionType.Negative,
		subType: InteractionNegative.OffensiveBehaviour,
		text: 'Offensive Behaviour',
	},
	{
		type: InteractionType.Negative,
		subType: InteractionNegative.RedLight,
		text: 'Ran Red Light',
		severe: true,
	},
	{
		type: InteractionType.Negative,
		subType: InteractionNegative.Stolen,
		text: 'Stolen Vehicle',
		severe: true,
	},
	{
		type: InteractionType.Negative,
		subType: InteractionNegative.ViolentBehaviour,
		text: 'Violent Behaviour',
		severe: true,
	},
	{
		type: InteractionType.Negative,
		subType: InteractionNegative.WrecklessDriving,
		text: 'Wreckless Driving',
	},
];

interface InteractionMapType {
	[InteractionType.Positive]: Record<InteractionPositive, string>;
	[InteractionType.Negative]: Record<InteractionNegative, string>;
}

export const InteractionMap: InteractionMapType = {
	[InteractionType.Positive]: {
		[InteractionPositive.GoodDriver]: 'Good Driver',
		[InteractionPositive.GoodSamaritan]: 'Good Samaritan',
		[InteractionPositive.Helpful]: 'Helpful',
		[InteractionPositive.Lawful]: 'Lawful',
		[InteractionPositive.Patient]: 'Patient',
		[InteractionPositive.Polite]: 'Polite',
		[InteractionPositive.WellMannered]: 'Well Mannered',
	},
	[InteractionType.Negative]: {
		[InteractionNegative.Crashed]: 'Crashed',
		[InteractionNegative.CriminalActivity]: 'Criminal Activity',
		[InteractionNegative.HitAndRun]: 'Hit & Run',
		[InteractionNegative.OffensiveBehaviour]: 'Offensive Behaviour',
		[InteractionNegative.RedLight]: 'Ran Red Light',
		[InteractionNegative.Stolen]: 'Stolen Vehicle',
		[InteractionNegative.ViolentBehaviour]: 'Violent Behaviour',
		[InteractionNegative.WrecklessDriving]: 'Wreckless Driving',
	},
};

export type InteractionEnabledType = Record<InteractionPositive | InteractionNegative, boolean>;

export const InteractionEnabled: InteractionEnabledType = {
	[InteractionPositive.GoodDriver]: false,
	[InteractionPositive.GoodSamaritan]: false,
	[InteractionPositive.Helpful]: false,
	[InteractionPositive.Lawful]: false,
	[InteractionPositive.Patient]: false,
	[InteractionPositive.Polite]: false,
	[InteractionPositive.WellMannered]: false,
	[InteractionNegative.Crashed]: false,
	[InteractionNegative.CriminalActivity]: false,
	[InteractionNegative.HitAndRun]: false,
	[InteractionNegative.OffensiveBehaviour]: false,
	[InteractionNegative.RedLight]: false,
	[InteractionNegative.Stolen]: false,
	[InteractionNegative.ViolentBehaviour]: false,
	[InteractionNegative.WrecklessDriving]: false,
};
