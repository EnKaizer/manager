import {EMAIL_CHANGED} from './types';

export const emailChanged = (Email) => {
	return {
		type: EMAIL_CHANGED,
		payload: Email
	}
}