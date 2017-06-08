import { fromJS } from 'immutable';
import { POSTED_LOGIN, FETCHED_LOGIN } from '../actions/indexLogin';

export default (state=fromJS([]), action) => {
	switch(action.type){

		case POSTED_LOGIN:
			return state.merge(fromJS([action.payload]));

		case FETCHED_LOGIN:
			return fromJS(action.payload);

		default:
			return state;
	}
}