import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged} from '../actions';
import {Card, CardSection, Input, Button} from './common'

class LoginForm extends Component {
	
	onEmailChange = (Email) => {
		this.props.emailChanged(Email);
	}


	render(){
		return(
			<Card>
				<CardSection>
					<Input
						label="Email"
						placeholder="example@gmail.com"
						onChangeText={this.onEmailChange}
					/>
				</CardSection>

				<CardSection>
					<Input
							secureTextEntry
							label="Password"
							placeholder="password"
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

export default connect(null, {emailChanged})(LoginForm);