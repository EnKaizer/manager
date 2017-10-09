import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
	return(
		<Router sceneStyle={{paddingTop: 55}}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login" initial/>
			</Scene>

			<Scene key="main">
				<Scene
				 onRight={() => Actions.employeeCreate()}
				 rightTitle="Add"
				 key="employeeList" component={EmployeeList} title="EmployeeList" initial/>
				 <Scene key="employeeCreate" component={EmployeeCreate} title="Add Employee"/>
				 <Scene key="employeeEdit" component={EmployeeEdit} title="Edit" />
			</Scene>
		</Router>
	)
};


export default RouterComponent;