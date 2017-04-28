export const POSTED_EDIT = 'POSTED_EDIT';
export const FETCHED_EDITED = 'FETCHED_EDITED';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/conductores', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then( result => result.json().then( conductor => dispatch({
	type: POSTED_EDIT,
	payload: conductor
})));

export const fetchConductores = () => (dispatch, getStore) => fetch('http://localhost:3004/conductores', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then( result => result.json().then( conductores => dispatch({
	type: FETCHED_EDITED,
	payload: conductores
})));