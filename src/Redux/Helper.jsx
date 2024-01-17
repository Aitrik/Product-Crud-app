import axios from "axios";

const adminUrl = "https://wtsacademy.dedicateddevelopers.us/api";

export const baseURL = adminUrl;

const axiosInstance = axios.create(
    {
        baseURL,
    }
);

export const productu = (media) => {
    return (
      `https://wtsacademy.dedicateddevelopers.us/uploads/product/${media}`
    );
  };
  
  export const profile_pic = (media) => {
    return (
      `https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${media}`
    );
  };
  
axiosInstance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (token !== null || token !== undefined) {
            config.headers['x-access-token'] = token;
        }
        return config
    },
    function (err) {
        console.error(err)
    }
)
export default axiosInstance;