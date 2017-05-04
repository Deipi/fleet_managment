import axios from 'axios';
import qs from 'qs'

export const getVehicles = () => (dispatch, getStore) => axios.get('http://localhost:3004/empleados').then(response => dispatch({
	type: GET_VEHICLES,
	payload: response.data,
}));
/*
export { getVehicles, };*/