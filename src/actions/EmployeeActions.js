import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEE_FETCH_SUCCESS,
	EMPLOYEE_SAVE_SUCCESS
} from './types'

export const employeeUpdate = ({prop, value}) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: {prop, value}
	}
};


export const employeeCreate = ({Nome, Tel, shift}) => {
	const {currentUser} = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.push({ Nome, Tel, shift })
			.then(() => {
				dispatch({type: EMPLOYEE_CREATE})
				Actions.employeeList({type: 'reset'})})
	}
};

export const employeesFetch = () => {
	const {currentUser} = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees`)
			.on('value', snapshot => {
				dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()})
			})
	}
}

export const employeeSave = ({Nome, Tel, shift, uid}) => {
	const {currentUser} = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
			.set({ Nome, Tel, shift })
			.then(() => {
				Actions.employeeList({type: 'reset'});
				dispatch({type: EMPLOYEE_SAVE_SUCCESS});
			});
		}
}

export const employeeDelete = ({uid}) => {
	const {currentUser} = firebase.auth();
	return () => {
		firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
			.remove()
			.then(() => {
				Actions.employeeList({type: 'reset'});
			});
	}
}