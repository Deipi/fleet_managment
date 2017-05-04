import Immutable from 'immutable';
import { FETCHED_EMPLEADOS } from '../actions/FilterMap';

export default (state=fromJS([]), action) => {
	switch(action.type) {
		case FETCHED_EMPLEADOS:
			return fromJS(action.payload);
		default:
			return state;
	}
}