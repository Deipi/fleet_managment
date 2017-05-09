export const POSTED_CONDUCTOR = 'POSTED_CONDUCTOR';
export const FETCHED_CONDUCTORES = 'FETCHED_CONDUCTORES';
export const UPDATE_CONDUCTORES = 'UPDATE_CONDUCTORES';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/conductores', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then(result => result.json().then(conductor => dispatch({
	type: POSTED_CONDUCTOR,
	payload:conductor
})));

export const fetchConductores=()=>(dispatch, getStore)=>fetch('http://localhost:3004/conductores', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result=>result.json().then(conductores=>dispatch ({
	type: FETCHED_CONDUCTORES,
	payload: conductores
})));

export const updateConductores= (id, data) =>(dispatch, getStore)=>fetch(`http://localhost:3004/conductores/${ id }`, {
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data),
}).then(result=>result.json().then(conductores=>dispatch ({
	type: UPDATE_CONDUCTORES,
	payload: conductores
})));