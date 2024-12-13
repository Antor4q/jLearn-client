import axios from "axios";

const axiosApi = axios.create({
    baseURL : "https://j-learn-server.vercel.app"
    // baseURL : 'http://localhost:5000'
    
})

const usePubAxios = () => {
    return axiosApi
};

export default usePubAxios;