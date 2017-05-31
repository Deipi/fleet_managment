import { fromJS } from 'immutable';
import { POSTED_FLOTILLA, FETCHED_FLOTILLAS } from '../actions/indexFlotilla';

export default (state=fromJS([]), action) => {
	switch(action.type){

		case POSTED_FLOTILLA:
			return state.merge(fromJS([action.payload]));

		case FETCHED_FLOTILLAS:
			return fromJS(action.payload);
			
		default:
			return state;
	}
}