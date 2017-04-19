export const POSTED_VEHICLE = 'POSTED_VEHICLE';
export const FETCHED_VEHICLES = 'FETCHED_VEHICLES';

export default data => (dispatch, getStore) => fetch('http://localhost:3005/vehicles', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then( result => result.json().then( vehicle => dispatch({
	type: POSTED_VEHICLE,
	payload: vehicle
})));

export const fetchVehicles = () => (dispatch, getStore) => fetch('http://localhost:3005/vehicles', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then( result => result.json().then( vehicles => dispatch({
	type: FETCHED_VEHICLES,
	payload: vehicles
})));