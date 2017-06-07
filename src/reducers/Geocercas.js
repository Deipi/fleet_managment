import { fromJS } from 'immutable';
import { POSTED_GEOCERCAS, FETCHED_GEOCERCAS } from '../actions/indexGeocercas';

export default (state=fromJS([]), action) => {
	switch(action.type) {
		case POSTED_GEOCERCAS:
			return state.merge(fromJS([action.payload]));

		case FETCHED_GEOCERCAS:
			return fromJS([action.payload]);
		default:
			return state;
	}
}