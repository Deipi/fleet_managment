import Immutable from 'immutable';
import { FETCHED_EMPLEADOS, GET_VEHICLES } from '../actions/FilterMap';
import { FETCHED_VEHICLES_FILTER } from '../actions/Filters';

export default (state=Immutable.fromJS([]), action) => {
	switch(action.type) {
		case FETCHED_EMPLEADOS:
			return Immutable.fromJS(action.payload);

		case GET_VEHICLES:
			return Immutable.fromJS(action.payload);

		case FETCHED_VEHICLES_FILTER:
			return Immutable.fromJS(action.payload);
			// return state.filter(vehicle => vehicle.get('id') === action.payload[0].id);
			// return state.filter(vehicle => vehicle.get('id') === action.payload[0].id);
		
		default:
			return state;
	}
}