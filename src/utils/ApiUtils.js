import axios from 'axios';
import qs from 'qs'

const getVehicles=()=>{
  return axios.get('http://localhost:3004/empleados');
};

export { getVehicles, };