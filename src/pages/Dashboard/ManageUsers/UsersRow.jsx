import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types"
import usePubAxios from "../../../hooks/usePubAxios";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
const UsersRow = ({user,refetch,index}) => {

    const axiosApi = usePubAxios()

      // delete user mutation api
      const {mutateAsync} = useMutation({
        mutationKey: ['delUser'],
        mutationFn: async(id) =>{
            const {data} = await axiosApi.delete(`/user-del/${id}`)
            return data
        },
        onSuccess : ()=>{
            refetch()
            toast.success("You have successfully deleted this")
        }
    })

    const handleDelete = id => {
        mutateAsync(id)
    }

    return (
        <tr className="lg:text-xl font-medium">
        <td>{index + 1}</td>
        <td>{user?.userName}</td>
        <td>{user?.userEmail}</td>
        <td>{user?.role}</td>
        <td>Select role</td>
        <td><button onClick={()=>handleDelete(user?._id)} className="text-white bg-red-500 p-2 rounded-xl text-xl font-medium"><MdDelete/></button><Toaster/></td>
      </tr>
    );
};

export default UsersRow;

UsersRow.propTypes = {
    user: PropTypes.object,
    refetch: PropTypes.func,
    index: PropTypes.number
}