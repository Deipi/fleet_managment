export const POSTED_CONDUCTOR = 'POSTED_CONDUCTOR';
export const FETCHED_CONDUCTORES = 'FETCHED_CONDUCTORES';

export default data => (dispatch, getStore) => fetch('http://localhost:3007/conductores', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then(result => result.json().then(conductor => dispatch({
	type: POSTED_CONDUCTOR,
	payload:conductor
})));

export const fetchConductores=()=>(dispatch, getStore)=>fetch('http://localhost:3007/conductores', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result=>result.json().then(conductores=>dispatch ({
	type: FETCHED_CONDUCTORES,
	payload: conductores
})));