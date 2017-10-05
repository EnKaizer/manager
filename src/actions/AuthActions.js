import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_SUCCESS, LOGIN_USER_FAIL} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

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

export const loginUser = ({email, password}) => {
	return (dispatch) => {

		dispatch({type: LOGIN_USER});


		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(user => loginUserSuccess(dispatch, user))
		.catch(() => {
			firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(err => {
			 console.log(err);
			 loginUserFail(dispatch)
			});
		})
	}
}

const loginUserFail = (dispatch) => {
	dispatch({type: LOGIN_USER_FAIL, payload: ''})
}

const loginUserSuccess = (dispatch, user) => {
	dispatch({type: LOGIN_SUCCESS, payload: user});

	Actions.main();
}