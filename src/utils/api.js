import axios from "axios";
// import { TOKEN } from "../config";

const axiosApiInstance = axios.create({
  withCredentials: false,
});

const API = async ({ url, method, config, data, params }) => {
  try {
    const response = await axiosApiInstance
      .request({
        url,
        method,
        withCredentials: false,
        data,
        params,
        ...config,
      })
      .catch((error) => {
        throw error.response;
      });
    return { response };
  } catch (err) {
    return { err };
  }
};

// axiosApiInstance.interceptors.request.use(
//   async (config) => {
//     config.headers = {
//       ...config.headers,
//       Authorization: `Bearer ${TOKEN}`,
//     };
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

export default API;
