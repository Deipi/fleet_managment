export const POSTED_FLOTILLA =  'POSTED_FLOTILLA';
export const FETCHED_FLOTILLAS = 'FETCHED_FLOTILLAS';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/flotillas', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then(result => result.json().then(flotilla => dispatch({
	type: POSTED_FLOTILLA,
	payload: flotilla
})));

export const fetchflotillas=()=>(dispatch, getStore)=>fetch('http://localhost:3004/flotillas', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result=>result.json().then(flotillas=>dispatch ({
	type: FETCHED_FLOTILLAS,
	payload: flotillas
})));