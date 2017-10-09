import _ from "lodash";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import {Card, CardSection, Button, ConfirmModal} from './common';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
	state = {Modal: false};

	componentWillMount = () => {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({prop, value})
		})
	}

	onButtonPress = () => {
		const {Nome, Tel, shift} = this.props;
		this.props.employeeSave({Nome, Tel, shift, uid: this.props.employee.uid});
	}

	onTextPress = () => {
		const {Tel, shift} = this.props;
		Communications.text(Tel, `Sua Proxima folga será ${shift}`);

	}

	onAccept = () => {
		const {uid} = this.props.employee
		this.props.employeeDelete({uid})
	}

	render(){
		return(
				<Card>
					<EmployeeForm {...this.props}/>

					<CardSection>
						<Button onPress={this.onButtonPress}>
							Salvar
						</Button>
					</CardSection>

					<CardSection>
						<Button onPress={this.onTextPress}>
							SMS para: {this.props.Tel}
						</Button>
					</CardSection>

					<CardSection>
						<Button onPress={() => this.setState({Modal: true})}>
							Demitir
						</Button>
					</CardSection>

					<ConfirmModal visible={this.state.Modal}
					 onAccept={this.onAccept}
					  onDecline={() => this.setState({Modal: false})}>
						Tem certeza que deseja demitir este funcionario?
					</ConfirmModal>
				</Card>
			)
	}
}

const mapStateToProps = (state) =>{
	const {Nome, Tel, shift} = state.employeeForm;
	return {Nome, Tel, shift};
}

export default connect(mapStateToProps, 
		{employeeUpdate,
		employeeSave,
		employeeDelete}
	)(EmployeeEdit);