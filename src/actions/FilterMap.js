import qs from 'qs';
export const POSTED_FILTER = 'POSTED_FILTER';
export const FETCHED_EMPLEADOS = 'FETCHED_EMPLEADOS';
export const GET_VEHICLES = 'GET_VEHICLES';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/unidades', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then(result => result.json().then(empleado => dispatch({
	type: POSTED_FILTER,
	payload: empleado
})));

export const getVehicles = () => (dispatch, getStore) => fetch('http://localhost:3004/unidades', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result => result.json().then(response => dispatch({
	type: GET_VEHICLES,
	payload: response
})));

export const fetchEmpleados=(filter)=>(dispatch, getStore)=>fetch(`http://localhost:3004/unidades?${qs.stringify(filter)}`, {

	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result=>result.json().then(unidades=>dispatch ({
	type: FETCHED_EMPLEADOS,
	payload: unidades
})));

