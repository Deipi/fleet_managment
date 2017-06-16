export const POSTED_ALERTAS =  'POSTED_ALERTAS';
export const FETCHED_ALERTAS = 'FETCHED_ALERTAS';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/alertas', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then(result => result.json().then(alert => dispatch({
	type: POSTED_ALERTAS,
	payload: alert
})));

export const fetchAlertas = userID => (dispatch, getStore)=> fetch(`http://localhost:3004/alertas/${ userID }/`, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result=>result.json().then(alertas => dispatch({
	type: FETCHED_ALERTAS,
	payload: alertas
})));