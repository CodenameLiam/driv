export enum InteractionType {
	Positive = 'POSITIVE',
	Negative = 'NEGATIVE',
	Warning = 'WARNING',
}

export enum InteractionNegative {
	RedLight = 'RAN_RED_LIGHT',
	Stolen = 'STOLEN',
	HitAndRun = 'HIT_AND_RUN',
	CriminalActivity = 'CRIMINAL_ACTIVITY',
	OffensiveBehaviour = 'OFFENSIVE_BEHAVIOUR',
	ViolentBehaviour = 'VIOLENT_BEHAVIOUR',
	WrecklessDriving = 'WRECKLESS_DRIVING',
	Crashed = 'CRASHED',
}

export enum InteractionPositive {
	Helpful = 'HELPFUL',
	Patient = 'PATIENT',
	Lawful = 'LAWFUL',
	Polite = 'POLITE',
	WellMannered = 'WELL_MANNERED',
	GoodSamaritan = 'GOOD_SAMARITAN',
	GoodDriver = 'GOOD_DRIVER',
}

export type InteractionSubType = InteractionPositive | InteractionNegative;

export interface InteractionDate {
	nanoseconds: number;
	seconds: number;
}

export interface InteractionObject {
	rego: string;
	type: InteractionType;
	subType: InteractionSubType;
	date: InteractionDate;
	hash: string;
	latitude: number;
	longitude: number;
}

export interface InteractionAttribute {
	type: InteractionType;
	subType: InteractionSubType;
	text: string;
}
