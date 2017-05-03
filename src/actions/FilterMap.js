import qs from 'qs';
export const POSTED_FILTER = 'POSTED_FILTER';
export const FETCHED_EMPLEADOS = 'FETCHED_EMPLEADOS';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/empleados', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then(result => result.json().then(empleado => dispatch({
	type: POSTED_FILTER,
	payload: conductor
})));

export const fetchEmpleados=(filter)=>(dispatch, getStore)=>fetch(`http://localhost:3004/empleados?${qs.stringify(filter)}`, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result=>result.json().then(empleados=>dispatch ({
	type: FETCHED_EMPLEADOS,
	payload: empleados
})));