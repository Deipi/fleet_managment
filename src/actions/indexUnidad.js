export const POSTED_UNIDAD =  'POSTED_UNIDAD';
export const FETCHED_UNIDADES = 'FETCHED_UNIDADES';
export const UPDATE_VEHICLES = 'UPDATE_VEHICLES';
export const FETCHED_EDITED = 'FETCHED_EDITED';
export const CLEAN_DRIVER = 'CLEAN_DRIVER';
export const DELETE_DRIVERS = 'DELETE_DRIVERS';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/unidades', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then(result => result.json().then(unidad => dispatch({
	type: POSTED_UNIDAD,
	payload: unidad
})));

export const fetchUnidades=()=>(dispatch, getStore)=>fetch('http://localhost:3004/unidades', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result=>result.json().then(unidades=>dispatch ({
	type: FETCHED_UNIDADES,
	payload: unidades
})));

export const updateVehicles = (id, data) => (dispatch, getStore) => fetch(`http://localhost:3004/unidades/${ id }`, {
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data),
}).then( result => result.json().then( unidades => dispatch({
	type: UPDATE_VEHICLES,
	payload: unidades
})));
