import { fromJS } from 'immutable';
import { FETCHED_VEHICLES_FILTER, CURRENT_MARKER } from '../actions/Filters';

export default (state=fromJS([]), action) => {
	switch(action.type) {

		case FETCHED_VEHICLES_FILTER:
			return fromJS(action.payload);

		case CURRENT_MARKER:
			return fromJS(action.payload);

		default:
			return state;
	}
}