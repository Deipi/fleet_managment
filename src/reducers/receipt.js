import { fromJS } from 'immutable';
import { FETCHED_VEHICLES_FILTER } from '../actions/Filters';

export default (state=fromJS([]), action) => {
	switch(action.type) {
		case FETCHED_VEHICLES_FILTER:
			return fromJS(action.payload);
		default:
			return state;
	}
}