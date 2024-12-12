import { MdClose, MdDelete, MdEdit } from "react-icons/md";
import PropTypes from "prop-types"
import usePubAxios from "../../../hooks/usePubAxios";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
const UsersRow = ({user,refetch,index}) => {

    const axiosApi = usePubAxios()
    const [selectedRole, setSelectedRole] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

     // Mutation for updating the user role
  const { mutateAsync:roleUpdate } = useMutation({
    mutationKey: ["updateRole"],
    mutationFn: async ({ id, role }) => {
      const { data } = await axiosApi.patch(`/user-role/${id}`, { role });
      return data;
    },
    onSuccess: () => {
      refetch()
      setIsModalOpen(false)
      toast.success("Role updated successfully!");
    }
  });

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

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

    // handle role update
    const handleSubmit = (e) => {
        e.preventDefault();
        roleUpdate({ id: user._id, role: selectedRole });
        closeModal();
      };

    return (
        <tr className="lg:text-xl font-medium">
        <td>{index + 1}</td>
        <td>{user?.userName}</td>
        <td>{user?.userEmail}</td>
        <td>{user?.role}</td>
        <td><button onClick={openModal} className="text-white p-2 bg-blue-600 rounded-xl text-xl font-medium"><MdEdit/></button></td>
        <td><button onClick={()=>handleDelete(user?._id)} className="text-white bg-red-500 p-2 rounded-xl text-xl font-medium"><MdDelete/></button><Toaster/></td>
       {
         isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Update Role</h2>
                  <button onClick={closeModal} className="text-gray-600 hover:text-gray-900">
                    <MdClose size={24} />
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Select Role</label>
                    <select
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                    >
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button type="button" onClick={closeModal} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400">
                      Cancel
                    </button>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )
       }
      </tr>
    );
};

export default UsersRow;

UsersRow.propTypes = {
    user: PropTypes.object,
    refetch: PropTypes.func,
    index: PropTypes.number
}