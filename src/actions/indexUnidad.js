export const POSTED_UNIDAD =  'POSTED_UNIDAD';
export const FETCHED_UNIDADES = 'FETCHED_UNIDADES';

export default data => (dispatch, getStore) => fetch('http://localhost:3006/unidades', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then(result => result.json().then(unidad => dispatch({
	type: POSTED_UNIDAD,
	payload: unidad
})));

export const fetchUnidades=()=>(dispatch, getStore)=>fetch('http://localhost:3006/unidades', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result=>result.json().then(unidades=>dispatch ({
	type: FETCHED_UNIDADES,
	payload: unidades
})));