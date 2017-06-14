import Immutable from 'immutable';
import { fromJS } from 'immutable';
import { FETCHED_EMPLEADOS, GET_VEHICLES } from '../actions/FilterMap';
import { FETCHED_VEHICLES_FILTER, CURRENT_MARKER } from '../actions/Filters';

export default (state=Immutable.fromJS([]), action) => {
	switch(action.type) {
		case FETCHED_EMPLEADOS:
			return Immutable.fromJS(action.payload);

		case GET_VEHICLES:
			return Immutable.fromJS(action.payload);

		case FETCHED_VEHICLES_FILTER:
			return Immutable.fromJS(action.payload);

		default:
			return state;
	}
}

export const currentVehicle = (state=Immutable.Map(Immutable.fromJS({
	monitorCounter: 0,
})), action) => {
	switch(action.type) {
		case CURRENT_MARKER:
			return state.merge(Immutable.fromJS(action.payload));
		case 'INITIAL_MONITOR':
			return state.merge(Immutable.fromJS({ monitorID: action.payload }))
		case 'MONITOR_COUNTER':
			return state.merge(Immutable.fromJS({ monitorCounter: action.payload }))
		default:
			return state;
	}
}
