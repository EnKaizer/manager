import React, {Component} from 'react';
import {Picker, Text} from 'react-native';
import {Card, CardSection, Input, Button} from './common';
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
					<CardSection>
						<Input
							label="Nome: "
							placeholder="Caique"
							value={this.props.Nome}
							onChangeText={Nome => this.props.employeeUpdate({prop: 'Nome', value: Nome})}
						/>
					</CardSection>

					<CardSection>
						<Input
							label="Telefone: "
							placeholder="(99)9-9999-9999"
							value={this.props.Tel}
							onChangeText={Tel => this.props.employeeUpdate({prop: 'Tel', value: Tel})}
						/>
					</CardSection>

					<CardSection style={{flexDirection: 'row', alignItems: 'center'}}>
						<Text style={styles.pickerTextStyle}>
							Dias da Semana: 
						</Text>
						<Picker
							style={{flex: 1}}
							selectedValue={this.props.shift}
							onValueChange={dia => this.props.employeeUpdate({prop: 'shift', value: dia})}
						>
							<Picker.Item label="Segunda" value="Segunda"/>
							<Picker.Item label="Terça" value="Terça"/>
							<Picker.Item label="Quarta" value="Quarta"/>
							<Picker.Item label="Quinta" value="Quinta"/>
							<Picker.Item label="Sexta" value="Sexta"/>
							<Picker.Item label="Sabado" value="Sabado"/>
							<Picker.Item label="Domingo" value="Domingo"/>
						</Picker>
					</CardSection>

					<CardSection>
						<Button onPress={this.onButtonPress}>
							Criar
						</Button>
					</CardSection>
				</Card>
			)
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
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