import { useQuery } from "@tanstack/react-query";
import usePubAxios from "./usePubAxios";


const useUsers = () => {
    const axiosApi = usePubAxios()
    
    const {data:users,refetch,isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: async()=>{
            const {data} = await axiosApi.get("/users")
            return data
        }
    })
 

    return [users,refetch,isLoading]
};

export default useUsers;