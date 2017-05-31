import Immutable from 'immutable';
import { POSTED_EDIT, FETCHED_EDITED, CLEAN_DRIVER } from '../actions/IndexDrivers';

export default (state=Immutable.List(), action) => {
	switch(action.type) {

		case POSTED_EDIT:
			return state.merge(Immutable.List(action.payload));

		case FETCHED_EDITED:
			return Immutable.Map(action.payload);

		case CLEAN_DRIVER:
			return Immutable.Map();

		default:
			return state;
	}
}