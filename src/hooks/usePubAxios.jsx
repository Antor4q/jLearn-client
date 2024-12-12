import axios from "axios";

const axiosApi = axios.create({
    baseURL : "http://localhost:5000"
    // baseURL : 'http://localhost:5000'
    
})

const usePubAxios = () => {
    return axiosApi
};

export default usePubAxios;