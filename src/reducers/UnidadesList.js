import { fromJS } from 'immutable';
import { POSTED_UNIDAD, FETCHED_UNIDADES } from '../actions/indexUnidad';

export default (state=fromJS([]), action)=>{
	switch(action.type){
		case POSTED_UNIDAD:
			return state.merge(fromJS([action.payload]));
		case FETCHED_UNIDADES:
			return fromJS(action.payload);
		default:
			return state;			
	}
}