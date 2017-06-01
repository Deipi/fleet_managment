export const POSTED_EMPLOYE_CONTAC = 'POSTED_EMPLOYE_CONTAC';

export default data => (dispatch, getStore) => fetch('http://localhost:3004/employes_contac', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then( result => result.json().then( employes_contac => dispatch({
	type: POSTED_EMPLOYE_CONTAC,
	payload: employes_contac
})));