export const POSTED_DRIVER = 'POSTED_DRIVER';
export const FETCHED_DRIVERS = 'FETCHED_DRIVERS';

export default data => (dispatch, getStore) => fetch('http://localhost:3007/conductores', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then( result => result.json().then( driver => dispatch({
	type: POSTED_DRIVER,
	payload: driver
})));

export const fetchDrivers = () => (dispatch, getStore) => fetch('http://localhost:3007/conductores', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then( result => result.json().then( conductores => dispatch({
	type: FETCHED_DRIVERS,
	payload: conductores
})));