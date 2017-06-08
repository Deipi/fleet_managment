import Immutable from 'immutable';
import { POSTED_VEHICLE, FETCHED_VEHICLES, DELETE_VEHICLES } from '../actions/index';

export default (state=Immutable.List(), action) => {
	switch(action.type) {
		case POSTED_VEHICLE:
			return state.merge(Immutable.List(action.payload));
		
		case FETCHED_VEHICLES:
			return Immutable.List(action.payload);
		
		case DELETE_VEHICLES:
			return state.filter(driver => driver.id !== action.payload);
		default:
			return state;
	}
}