import axios from "axios";

//base url can be added to .env
const baseURL = " http://ddcapi.allenbpms.in";
const headers = {};

//adding jwt token
if (localStorage.token) {
	headers.Autherization = `Bearer ${localStorage.token}`;
}

const axiosInstance = axios.create({ baseURL: baseURL, headers });
export default axiosInstance;
