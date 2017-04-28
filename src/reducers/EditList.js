import Immutable from 'immutable';
import { POSTED_EDIT, FETCHED_EDITED } from '../actions/indexEdit';

export default (state=Immutable.List(), action) => {
	switch(action.type) {
		case POSTED_EDIT:
			return state.merge(Immutable.List(action.payload));
		case FETCHED_EDITED:
			return Immutable.Map(action.payload);
		default:
			return state;
	}
}