export const POSTED_DRIVER = 'POSTED_DRIVER';
export const FETCHED_DRIVERS = 'FETCHED_DRIVERS';
export const FETCHED_EDITED = 'FETCHED_EDITED';
export const DELETE_DRIVERS = 'DELETE_DRIVERS';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/conductores', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then( result => result.json().then( driver => dispatch({
	type: POSTED_DRIVER,
	payload: driver
})));

export const fetchDrivers = () => (dispatch, getStore) => fetch('http://localhost:3004/conductores', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then( result => result.json().then( conductores => dispatch({
	type: FETCHED_DRIVERS,
	payload: conductores
})));

export const deleteDrivers = (id) => (dispatch, getStore) => fetch(`http://localhost:3004/conductores/${ id }`, {
	method: 'DELETE',
	headers: {
		'Content-Type': 'application/json'
	},
}).then( result => result.json().then( conductores => dispatch({
	type: DELETE_DRIVERS,
	payload: id
})));