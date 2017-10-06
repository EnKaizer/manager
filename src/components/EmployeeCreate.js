import React, {Component} from 'react';
import {Picker, Text} from 'react-native';
import {CardSection, Card, Button} from './common';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeCreate} from '../actions';
import {connect} from 'react-redux';

class EmployeeCreate extends Component {

	onButtonPress = () => {
		const {Nome, Tel, shift} = this.props;
		this.props.employeeCreate({Nome, Tel, shift: shift || 'Segunda'});
	}


	render(){
		return(
				<Card>
					<EmployeeForm {...this.props}/>
					<CardSection>
						<Button onPress={this.onButtonPress}>
							Criar
						</Button>
					</CardSection>
				</Card>
			)
	}
}


mapStateToProps = (state) => {
	const {Nome, Tel, shift} = state.employeeForm;
	return {Nome, Tel, shift};
}

export default connect(mapStateToProps, 
		{employeeUpdate,
		employeeCreate}
	)(EmployeeCreate);