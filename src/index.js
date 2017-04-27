import React from 'react';
import ReactDOM from 'react-dom';

import immutable from 'immutable';
import { combineReducers } from 'redux-immutablejs';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form/immutable'



import Unidad from './containers/Unidad';
import Conductor from './containers/Conductor';

import SimpleFormFlotilla from './components/SimpleFormFlotilla';
//import FormConductor from './components/FormConductor';
import MapContainer from './components/MapContainer';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import VehiclesList from './containers/VehiclesList';
import DriversList from './containers/DriversList';

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
import conductores from './reducers/DriversList';


const initialState = immutable.Map();

const rootReducer = combineReducers({
	form: formReducer,
	VehiclesList: vehicles,
	DriversList: conductores,

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
	        <li><Link to='drivers'>Drivers</Link></li>
	      </ul>

	      <h2> PROYECTO </h2>

	      <hr/>
	      <Switch>
	      	<Route path="/formulario" component={ props =>
	      		<Component {...props}>
	      		<Unidad /></Component> } />

	      	<Route path="/flotilla" component={ props =>
	      		<Component {...props}>
	      		<SimpleFormFlotilla initialValues={ { nombre: 'Andrea', supervisor: 'Andres', garage: 'no garage' } } /></Component> } />

	      	<Route path="/vehicles" component={ props =>
	      		<Component {...props}>
	      		<VehiclesList/></Component> } />

	      	<Route path="/conductores" component={ props =>
	      		<Component {...props}>
	      		<Conductor /></Component> } />

	      	<Route path="/monitoreo" component={ props =>
	      		<Component {...props}>
	      		<MapContainer /></Component> } />

	      	<Route
	      		path="/drivers" component={ props =>
	      			<Component {...props}>
	      			<DriversList/></Component> } />

	      </Switch>
	    </div>
  </Router>
  	</Provider>,
  document.getElementById('root')
);