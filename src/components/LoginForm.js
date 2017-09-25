import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged} from '../actions';
import {Card, CardSection, Input, Button} from './common'

class LoginForm extends Component {
	
	onEmailChange = (Email) => {
		this.props.emailChanged(Email);
	}

	onPasswordChange = (pass) => {
		this.props.passwordChanged(pass);
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

				<CardSection>
					<Button>
						Login
					</Button>
				</CardSection>

			</Card>
			)
	}
}

 const mapStateToProps = state => {
	return{
		email: state.auth.email,
		password: state.auth.password
	}
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);