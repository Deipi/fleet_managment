import Immutable from 'immutable';
import { FETCHED_EMPLEADOS, GET_VEHICLES } from '../actions/FilterMap';

export default (state=Immutable.fromJS([]), action) => {
	switch(action.type) {
		case FETCHED_EMPLEADOS:
			return Immutable.fromJS(action.payload);

		case GET_VEHICLES:
		
			return Immutable.fromJS(action.payload);
		default:
			return state;
	}
}