export interface NotificationDate {
	nanoseconds: number;
	seconds: number;
}

export interface Notification {
	id?: string;
	user: string;
	text: string;
	read: boolean;
	date: NotificationDate;
}
