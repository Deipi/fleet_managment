export const POSTED_LOGIN =  'POSTED_LOGIN';
export const FETCHED_LOGIN = 'FETCHED_LOGIN';

import { fetchAlertas } from '../actions/indexAlertas';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/registrar', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then(result => result.json().then(log => dispatch({
	type: POSTED_LOGIN,
	payload: log
})));


export const fetchlogin = data => (dispatch, getStore)=> fetch(`http://localhost:3004/registrar/?email=${ data.email }&password=${ data.password }`, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then(result=>result.json().then(registrar=> {

	dispatch(fetchAlertas(registrar[0].id));

	return dispatch({
		type: FETCHED_LOGIN,
		payload: registrar
	});
}));