import { useQuery } from "@tanstack/react-query";
import usePubAxios from "./usePubAxios";


const useLessons = () => {
    
    const axiosApi = usePubAxios()
    
    const {data,isLoading} = useQuery({
        queryKey: ["lessons"],
        queryFn: async()=>{
            const {data} = await axiosApi.get("/lessons")
            return data
        }
    })
 

    return [data,isLoading]
};

export default useLessons;