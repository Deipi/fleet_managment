import React from 'react';
import ReactDOM from 'react-dom';
import immutable from 'immutable';
import { combineReducers } from 'redux-immutablejs';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { reducer as formReducer } from 'redux-form/immutable';
import 'bootstrap/dist/css/bootstrap.css';


import Unidad from './containers/Unidad';
import Conductor from './containers/Conductor';
import SimpleFormFlotilla from './containers/Flotilla';
import MapContainer from './components/MapContainer';
import VehiclesList from './containers/VehiclesList';
import DriversList from './containers/DriversList';
import Contact from './containers/Contact';
import Historial from './containers/Historial';
import Pedidos from './containers/Pedidos';
import Login from './containers/Login';
import Registrar from './containers/Registrar';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Entregas from './containers/Entregas';
import Geocercas from './components/Geocercas';

import Alertas from './components/Alertas'
import Alerts from './containers/Alertas';

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
import conductoresEdit from './reducers/EditList';
import vehiclesEdit from './reducers/EditUnit';
import vehiclesReducer, { currentVehicle } from './reducers/Map';
import vehiclesFilterReducer from './reducers/receipt';
import loginReducer from './reducers/Login';
import entrega from './reducers/Entregas';
import alertas from './reducers/Alertas';

const initialState = immutable.Map();

const rootReducer = combineReducers({
	form: formReducer,
	VehiclesList: vehicles,
	DriversList: conductores,
	conductoresInfo: conductoresEdit,
	vehiclesInfo: vehiclesEdit,
	vehiclesStore: vehiclesReducer,
	vehiclesFilter: vehiclesFilterReducer,
	currentVehicle: currentVehicle,
	login: loginReducer,
	Entregas: entrega,
	alertas,
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));


class Menu extends React.Component {
  constructor(props) {Collapse
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
  	const { login } = this.props;

    return (
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          {
          	login && login.size ? (
          		<p>
          			Bienvenido { login.get(0).get('name') }
          		</p>
          	) : (
          		<NavbarBrand><Link to='login'>Login</Link></NavbarBrand>
          	)
          }
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            	{
          			login && login.size ? (
		        <NavItem>
		        	<NavLink><Link to='pedidos'>Orders</Link></NavLink>
		        </NavItem>
		        	) : null
			    }
            	{
          			login && login.size ? (
			            <NavItem>
			                <NavLink><Link to='vehicles'>Vehicles</Link></NavLink>
			            </NavItem>
			        ) : null
			    }
			    {
          			login && login.size ? (
		        <NavItem>
		        	<NavLink><Link to='drivers'>Drivers</Link></NavLink>
		        </NavItem>
		        	) : null
			    }
			    {
          			login && login.size ? (
		        <NavItem>
		        	<NavLink><Link to='entregas'>Deliveries</Link></NavLink>
		        </NavItem>
		        	) : null
			    }
			    {
          			login && login.size ? (
		        <NavItem>
		        	<NavLink><Link to='monitoreo'>Monitoring</Link></NavLink>
		        </NavItem>
		        	) : null
			    }
			    {
          			login && login.size ? (
		        <NavItem>
		        	<NavLink><Link to='geocercas'>Geofences</Link></NavLink>
		        </NavItem>
		        	) : null
			    }
		        {
          			login && login.size ? (
		        <NavItem>
		        	<NavLink><Link to='contact'>Contact</Link></NavLink>
		        </NavItem>
		        	) : null
			    }
		        {
          			login && login.size ? (
		        <NavItem>
		        	<NavLink><Link to='historial'>History</Link></NavLink>
		        </NavItem>
		        	) : null
			    }
		        {
          			login && login.size ? (
		        <NavItem>
		        	<NavLink><a href='./login'>Log out</a></NavLink>
		        </NavItem>
		        	) : null
			    }
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

const MenuConnect = connect(state => {
  return {
    login: state.get('login'),
  }
})(Menu);

ReactDOM.render(
  	<Provider store={ store }>
  		<Router>

		    <div>
<Alerts/>
	  		<MenuConnect/>
	      	<br/>
	      			<h4> DEIPI.COM S.A de C.V. </h4>
	      	
		    <hr/>


			<br/>
			<h4>
				<i className="fa fa-bars boton-menu ml-3 p-1" aria-hidden="true"></i>
				DEIPI.COM S.A de C.V.
			</h4>

		     <hr/>

		      <Switch>

		      	<Route path="/registrar" component={ props =>
		      		<Component {...props}>
		      		<Registrar/></Component> } />

		      	<Route path="/login" component={ props =>
		      		<Component {...props}>
		      		<Login/></Component> } />

		      	<Route path="/unidades" component={ props =>
		      		<Component {...props}>
		      		<Unidad/></Component> } />

		      	<Route path="/flotilla" component={ props =>
		      		<Component {...props}>
		      		<SimpleFormFlotilla/></Component> } />

		      	<Route path="/vehicles" component={ props =>
		      		<Component {...props}>
		      		<VehiclesList/></Component> } />

		      	<Route path="/conductores" component={ props =>
		      		<Component {...props}>
		      		<Conductor /></Component> } />

		      	<Route path="/monitoreo" component={ props =>
		      		<Component {...props}>
		      		<MapContainer /></Component> } />

		      	<Route path="/drivers" component={ props =>
		      		<Component {...props}>
		      		<DriversList/></Component> } />

		      	<Route path="/contact" component={ props =>
		      		<Component {...props}>
		      		<Contact/></Component> } />

		      	<Route path="/historial" component={ props =>
		      		<Component {...props}>
		      		<Historial/></Component> } />

		      	<Route path="/pedidos" component={ props =>
		      		<Component {...props}>
		      		<Pedidos/></Component> } />

		      	<Route path="/geocercas" component={ props =>
		      		<Component {...props}>
		      		<Geocercas/></Component> } />

		      	<Route path="/entregas" component={ props =>
		      		<Component {...props}>
		      		<Entregas/></Component> } />

		      </Switch>
		    </div>
  		</Router>
  	</Provider>,
  	document.getElementById('root')
);