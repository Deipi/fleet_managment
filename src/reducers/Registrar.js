import { fromJS } from 'immutable';
import { POSTED_REG, FETCHED_REG } from '../actions/indexRegistrar';

export default (state=fromJS([]), action) => {
	switch(action.type){

		case POSTED_REG:
			return state.merge(fromJS([action.payload]));

		case FETCHED_REG:
			return fromJS(action.payload);

		default:
			return state;
	}
}