import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {CardSection, Input} from './common'



class EmployeeForm extends Component {
	render(){
		return(
			<View>
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
				</View>
			)
	}
};

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
}

const mapStateToProps = (state) => {
	const {Nome, Tel, shift} = state.employeeForm;
	return {Nome, Tel, shift}
}


export default connect(null, {employeeUpdate})(EmployeeForm);