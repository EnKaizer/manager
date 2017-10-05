import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection} from './common';


class ListItem extends Component {

	onRowPress = () => {
		Actions.employeeCreate({employee: this.props.employee});
	}


	render(){
		console.log(this.props);
		const {Nome} = this.props.employee;
		console.warn(Nome)

		return(
			<TouchableWithoutFeedback onPress={this.onRowPress}>
					<View>
						<CardSection>
							<Text style={styles.titleStyle}>
								{Nome}
							</Text>
						</CardSection>
					</View>
			</TouchableWithoutFeedback>
			)
	}
}

const styles = {
	titleStyle : {
		fontSize: 18,
		paddingLeft: 15
	}
}

export default ListItem;