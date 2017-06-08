export const POSTED_GEOCERCAS =  'POSTED_GEOCERCAS';
export const FETCHED_GEOCERCAS = 'FETCHED_GEOCERCAS';

export default data => (dispatch, getStore)=> fetch('http://localhost:3004/geocercas', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then( result => result.json().then( geocercas => dispatch({
	type: POSTED_GEOCERCAS,
	payload: geocercas
})));

export const fetchGeocercas=()=>(dispatch, getStore)=>fetch('http://localhost:3004/geocercas', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result=>result.json().then(geocercas=>dispatch ({
	type: FETCHED_GEOCERCAS,
	payload: geocercas
})));
