import { fromJS } from 'immutable';
import { POSTED_EMPLOYE_CONTAC, FETCHED_EMPLOYES_CONTAC } from '../actions/indexC';

export default (state=fromJS([]), action) => {
	switch(action.type) {
		case POSTED_EMPLOYE_CONTAC:
			return state.merge(fromJS([action.payload]));
		default:
			return state;
	}
}