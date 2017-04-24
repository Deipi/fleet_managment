import React from 'react';
import ReactDOM from 'react-dom';

import immutable from 'immutable';
import { combineReducers } from 'redux-immutablejs';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form/immutable'


import FormUnidad from './components/FormUnidad';

import SimpleFormFlotilla from './components/SimpleFormFlotilla';
import FormConductor from './components/FormConductor';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import VehiclesList from './containers/VehiclesList';

import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  Link,
  Switch
} from 'react-router-dom'


const Component = (props) => {
	
	return (
		<div>
			{ props.children }
		</div>
	);
}

import vehicles from './reducers/VehiclesList';
import unidades from './reducers/UnidadesList';

const initialState = immutable.Map();

const rootReducer = combineReducers({
	form: formReducer,
	VehiclesList: vehicles,
	
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={ store }>
  		<Router>
	    <div>
	      <ul id="menu">
	        <li><Link to='formulario'>Unidades</Link></li>
	        <li><Link to='flotilla'>Flotilla</Link></li>
	        <li><Link to='vehicles'>Vehicles</Link></li>
	        <li><Link to='conductores'>Conductores</Link></li>
	        <li><Link to='monitoreo'>Monitoreo</Link></li>
	      </ul>

	      <h2> PROYECTO </h2>

	      <hr/>
	      <Switch>
	      	<Route path="/formulario" component={ props => 
	      		<Component {...props}>
	      		<FormUnidad initialValues={{label: 'Car', model: 'Ford Focus', vehicle_registration_plate: 'SBA 1234A', vin: 'JMZMA18P200411817', chassis_number: 'LJCPCBLCXI1000237'}}/></Component> } />
	      	
	      	<Route path="/flotilla" component={ props => 
	      		<Component {...props}>
	      		<SimpleFormFlotilla initialValues={ { nombre: 'Andrea', supervisor: 'Andres', garage: 'no garage' } } /></Component> } />
	      	
	      	<Route path="/vehicles" component={ props => 
	      		<Component {...props}>
	      		<VehiclesList/></Component> } />
	      	
	      	<Route path="/conductores" component={ props => 
	      		<Component {...props}>
	      		<FormConductor initialValues={{last_name: 'Cartens', first_name: 'Jose', middle_name: 'Luis', hardware_key: 'JMZMA18P200411817', phone: '7861161212', email:'alf@g.com', driver_license_number: '123', driver_license_class: 'abc', expiration_date: '2017-04-21'}}/></Component> } />
	      	
	      	

	      </Switch>
	    </div>
  </Router>
  	</Provider>,
  document.getElementById('root')
);