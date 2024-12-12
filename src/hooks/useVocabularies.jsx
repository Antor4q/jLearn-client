import { useQuery } from "@tanstack/react-query";
import usePubAxios from "./usePubAxios";


const useVocabularies = () => {
    const axiosApi = usePubAxios()
    
    const {data:vocabularies,refetch} = useQuery({
        queryKey: ["vocabularies"],
        queryFn: async()=>{
            const {data} = await axiosApi.get("/vocabularies")
            return data
        }
    })
 

    return [vocabularies,refetch]
};

export default useVocabularies;