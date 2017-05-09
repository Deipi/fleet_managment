import Immutable from 'immutable';
import { FETCHED_EMPLEADOS, GET_VEHICLES } from '../actions/FilterMap';

export default (state=Immutable.fromJS([]), action) => {
	switch(action.type) {
		case FETCHED_EMPLEADOS:
			return Immutable.fromJS(action.payload);

		case GET_VEHICLES:
			const newList = action.payload.map(obj => {
				if (typeof obj.latitud === "string") {
					obj.latitud = parseFloat(obj.latitud);
				}
				if (typeof obj.longitud === "string") {
					obj.longitud = parseFloat(obj.longitud);
				}

				return obj;
			});

			return Immutable.fromJS(newList);
		default:
			return state;
	}
}