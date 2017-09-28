import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common'

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

	renderButton = () => {
		if(this.props.loading){
			return( <Spinner size="large"/>)
		}
			return(	
				<Button onPress={this.onButtonPress}>
					Login
				</Button>
			)
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
					{this.renderButton()}
				</CardSection>

			</Card>
			)
	}
}

const styles = {
	error:{
		fontSize: 20,
		color: 'red',
		alignSelf: 'center'
	}
}


 const mapStateToProps = ({auth}) => {
 	const {email, password, error, loading} = auth;
	return{
		email,
		password,
		error,
		loading
	}
}

export default connect(mapStateToProps, {
	emailChanged, passwordChanged, loginUser
})(LoginForm);