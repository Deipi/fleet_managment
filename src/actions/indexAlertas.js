export const POSTED_ALERTAS =  'POSTED_ALERTAS';
export const FETCHED_ALERTAS = 'FETCHED_ALERTAS';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/conductores', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then(result => result.json().then(alert => dispatch({
	type: POSTED_ALERTAS,
	payload: alert
})));

export const fetchAlertas = data => (dispatch, getStore)=> fetch(`http://localhost:3004/conductores/?id=${ data.id }}`, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result=>result.json().then(conductores=>dispatch({
	type: FETCHED_ALERTAS,
	payload: conductores
})));