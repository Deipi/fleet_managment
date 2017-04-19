import Immutable from 'immutable';
import { POSTED_VEHICLE, FETCHED_VEHICLES } from '../actions';

export default (state=Immutable.List(), action) => {
	switch(action.type) {
		case POSTED_VEHICLE:
			return state.merge(Immutable.List(action.payload));
		case FETCHED_VEHICLES:
			return Immutable.List(action.payload);
		default:
			return state;
	}
}