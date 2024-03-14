
import axios from 'axios'

let adminUrl = 'https://wtsacademy.dedicateddevelopers.us/api/user'
export const baseURL = adminUrl;


if (process.env?.REACT_APP_ENV === "production") {
    adminUrl = "https://wtsacademy.dedicateddevelopers.us/api/user"; 
  }

   let axiosInstance = axios.create({
        baseURL,
    });

    axiosInstance.interceptors.request.use(
        async function (config) {
            const token = localStorage.getItem("token") || sessionStorage.getItem("token");
            if (token !== null || token !== undefined) { config.headers['x-access-token'] = token; }
            return config;
        },
        function (err) {
            return Promise.reject(err);
        }
    )

export default axiosInstance;
   



