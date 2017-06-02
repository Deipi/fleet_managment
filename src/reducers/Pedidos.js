import { fromJS } from 'immutable';
import { POSTED_PEDIDOS } from '../actions/indexPedidos';

export default (state=fromJS([]), action) => {
	switch(action.type) {
		case POSTED_PEDIDOS:
			return state.merge(fromJS([action.payload]));
		default:
			return state;
	}
}