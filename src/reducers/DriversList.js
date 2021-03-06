import Immutable from 'immutable';
import { POSTED_DRIVER, FETCHED_DRIVERS, DELETE_DRIVERS } from '../actions/IndexDrivers';

export default (state=Immutable.List(), action) => {
	switch(action.type) {
		case POSTED_DRIVER:
			return state.merge(Immutable.List(action.payload));

		case FETCHED_DRIVERS:
			return Immutable.List(action.payload);

		case DELETE_DRIVERS:
			return state.filter(driver => driver.id !== action.payload);

		default:
			return state;
	}
}