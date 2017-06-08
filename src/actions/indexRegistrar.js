export const POSTED_REG =  'POSTED_REG';
export const FETCHED_REG = 'FETCHED_REG';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/registrar', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then(result => result.json().then(reg => dispatch({
	type: POSTED_REG,
	payload: reg
})));

export const fetchregistrar=()=>(dispatch, getStore)=>fetch('http://localhost:3004/registrar', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result=>result.json().then(registrar=>dispatch ({
	type: FETCHED_REG,
	payload: registrar
})));