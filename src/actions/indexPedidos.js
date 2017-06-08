export const POSTED_PEDIDOS = 'POSTED_PEDIDOS';


export default data => (dispatch, getStore) => fetch('http://localhost:3004/pedidos', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify(data)
}).then( result => result.json().then( pedidos => dispatch({
	type: POSTED_PEDIDOS,
	payload: pedidos
})));
