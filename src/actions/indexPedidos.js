export const POSTED_PEDIDOS = 'POSTED_PEDIDOS';
export const FETCHED_ENTREGAS = 'FETCHED_ENTREGAS';


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

export const fetchEntregas = () => (dispatch, getStore) => fetch('http://localhost:3004/pedidos', {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
}).then( result => result.json().then( pedido => dispatch({
	type: FETCHED_ENTREGAS,
	payload: pedido
})));