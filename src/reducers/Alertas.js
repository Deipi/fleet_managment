import { fromJS } from 'immutable';
import { POSTED_ALERTAS, FETCHED_ALERTAS } from '../actions/indexAlertas';

export default (state=fromJS([]), action) => {
	switch(action.type){

		case POSTED_ALERTAS:
			return state.merge(fromJS([action.payload]));

		case FETCHED_ALERTAS:
			return fromJS(action.payload.list);

		default:
			return state;
	}
}