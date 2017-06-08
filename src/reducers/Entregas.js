import Immutable from 'immutable';
import { FETCHED_ENTREGAS } from '../actions/indexPedidos';

export default (state=Immutable.List(), action) => {
	switch(action.type) {

		case FETCHED_ENTREGAS:
			return Immutable.List(action.payload);

		default:
			return state;
	}
}