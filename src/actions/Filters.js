import qs from 'qs';
export const FETCHED_VEHICLES_FILTER = 'FETCHED_VEHICLES_FILTER';

export const fetchVehiclesFilter = (filter) => (dispatch, getStore) => fetch(`http://localhost:3004/unidades?${filter}`, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},

}).then( result => result.json().then( unidades => {debugger; return dispatch({
	type: FETCHED_VEHICLES_FILTER,
	payload: unidades

})}));

export default fetchVehiclesFilter;
