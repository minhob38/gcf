import axios from "axios";

// export const API_SERVER_ADDRESS = "http://3.39.126.180";
// export const API_SERVER_ADDRESS =
//   process.env.NODE_ENV === "production"
//     ? "https://api.onepick.info"
//     : "https://dev-api.onepick.info";
export const API_SERVER_ADDRESS = "https://dev-api.onepick.info";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
