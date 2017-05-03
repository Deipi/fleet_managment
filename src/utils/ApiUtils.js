import axios from 'axios';


const getVehicles=()=>{
  return axios.get('http://localhost:3004/empleados');
  //return axios.get('http://www.json-generator.com/api/json/get/cgacdBBhgy?indent=2');
};

export { getVehicles, };