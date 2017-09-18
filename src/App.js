import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';


class App extends Component {
	componentWillMount = () => {
			const config = {
	    apiKey: "AIzaSyBuokFBx3ylN26YPMK7af-LEbRprCyEa7A",
	    authDomain: "manager-e09b9.firebaseapp.com",
	    databaseURL: "https://manager-e09b9.firebaseio.com",
	    projectId: "manager-e09b9",
	    storageBucket: "manager-e09b9.appspot.com",
	    messagingSenderId: "230473652037"
	  	};
	  firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello!
					</Text>
				</View>
			</Provider>
			)
	}
}

export default App;