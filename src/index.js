import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import immutable from 'immutable';
import { combineReducers } from 'redux-immutablejs';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form/immutable'


import FormUnidad from './components/FormUnidad';


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

// import VehiclesReducer from './reducers/VehiclesDim';


const initialState = immutable.Map();

const rootReducer = combineReducers({
	form: formReducer,
	//VehiclesDim: VehiclesReducer,
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={ store }>
  		<Router>
	    <div>
	      <ul id="menu">
	        <li><Link to='formulario'>Unidades</Link></li>
	      </ul>

	      <h2> PROYECTO </h2>

	      <hr/>
	      <Switch>
	      	<Route path="/formulario" component={ props => <Component {...props}><FormUnidad/></Component> } />
	      </Switch>
	    </div>
  </Router>
  	</Provider>,
  document.getElementById('root')
);
