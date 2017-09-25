import {EMAIL_CHANGED, PASSWORD_CHANGED} from './types';
import firebase from 'firebase';

export const emailChanged = (Email) => {
	return {
		type: EMAIL_CHANGED,
		payload: Email
	}
}

export const passwordChanged = (password) => {
	return {
		type: PASSWORD_CHANGED,
		payload: password
	}
}

export const loginUser ({email, password}) = {
	return (dispatch) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => console.log(user));
	}
}