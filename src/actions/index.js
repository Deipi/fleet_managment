export const POSTED_VEHICLE = 'POSTED_VEHICLE';
export const FETCHED_VEHICLES = 'FETCHED_VEHICLES';
export const FETCHED_EDITED = 'FETCHED_EDITED';
export const CLEAN_VEHICLE = 'CLEAN_VEHICLE';
export const DELETE_VEHICLES = 'DELETE_VEHICLES';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/unidades', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then( result => result.json().then( vehicle => dispatch({
	type: POSTED_VEHICLE,
	payload: vehicle
})));

export const fetchVehicles = () => (dispatch, getStore) => fetch('http://localhost:3004/unidades', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then( result => result.json().then( unidades => dispatch({
	type: FETCHED_VEHICLES,
	payload: unidades
})));

export const deleteVehicles = (id) => (dispatch, getStore) => fetch(`http://localhost:3004/unidades/${ id }`, {
	method: 'DELETE',
	headers: {
		'Content-Type': 'application/json'
	},
}).then( result => result.json().then( unidades => dispatch({
	type: DELETE_VEHICLES,
	payload: id
})));
