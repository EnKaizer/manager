import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button} from './common'

class LoginForm extends Component {
	
	onEmailChange = (Email) => {
		this.props.emailChanged(Email);
	}

	onPasswordChange = (pass) => {
		this.props.passwordChanged(pass);
	}

	onButtonPress = () => {
		const {email, password} = this.props;
		this.props.loginUser({email, password});
	}


	render(){
		return(
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="example@gmail.com"
						value={this.props.email}
						onChangeText={this.onEmailChange}
					/>
				</CardSection>

				<CardSection>
					<Input
							secureTextEntry
							label="Password"
							placeholder="password"
							onChangeText={this.onPasswordChange}
							value={this.props.password}
						/>
				</CardSection>

				<Text style={styles.error}>
					{this.props.error}
				</Text>

				<CardSection>
					<Button onPress={this.onButtonPress}>
						Login
					</Button>
				</CardSection>

			</Card>
			)
	}
}

const styles = {
	error:{
		fontSize: 20,
		color: 'red',
		allignSelf: 'center'
	}
}


 const mapStateToProps = ({auth}) => {
 	const {email, password, error} = auth;
	return{
		email: email,
		password: password,
		error: error
	}
}

export default connect(mapStateToProps, {
	emailChanged, passwordChanged, loginUser
})(LoginForm);