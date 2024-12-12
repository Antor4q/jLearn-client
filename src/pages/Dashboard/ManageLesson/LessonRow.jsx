import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types"
import usePubAxios from "../../../hooks/usePubAxios";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const LessonRow = ({lesson,refetch}) => {

    const axiosApi = usePubAxios()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editLesson, setEditLesson] = useState({
        name: lesson.name || "",
        number: lesson.number || "",
      });

    // delete lesson mutation api
    const {mutateAsync} = useMutation({
        mutationKey: ['delLesson'],
        mutationFn: async(id) =>{
            const {data} = await axiosApi.delete(`/lesson-del/${id}`)
            return data
        },
        onSuccess : ()=>{
            refetch()
            toast.success("You have successfully deleted this")
        }
    })

    // update lesson mutation api
    
  const { mutateAsync: updateLesson } = useMutation({
    mutationKey: ["updateLesson"],
    mutationFn: async (updatedLesson) => {
      const { data } = await axiosApi.patch(
        `/lesson-update/${lesson._id}`,
        updatedLesson
      );
      return data;
    },
    onSuccess: () => {
      refetch();
      setIsModalOpen(false);
      toast.success("You have successfully updated this lesson");
    },
  });


    const handleDelete = id => {
        mutateAsync(id)
    }

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

    //   update func
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditLesson((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleLessonUpdate = (e) => {
        e.preventDefault();
        updateLesson(editLesson); 
      };
   
    return (
        <tr className="md:text-xl md:font-medium">
        <td>{lesson.number}</td>
        <td>{lesson.name}</td>
        
        <td>10</td>
        <td><button onClick={openModal} className="text-white p-2 bg-blue-600 rounded-xl text-xl font-medium"><FaEdit/></button> <Toaster/></td>
        <td> 
            <button  onClick={()=>handleDelete(lesson?._id)} className="text-white bg-red-500 p-2 rounded-xl text-xl font-medium"><MdDelete/></button>
            <Toaster/>
            </td>

            {/* Modal */}
      {isModalOpen && (
        <div className="fixed px-4 lg:px-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Update Lesson</h2>

            <form onSubmit={handleLessonUpdate}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Lesson Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={editLesson.name}
                  onChange={handleInputChange}
                  placeholder="Enter lesson name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Lesson Number
                </label>
                <input
                  type="number"
                  name="number"
                  value={editLesson.number}
                  onChange={handleInputChange}
                  placeholder="Enter lesson number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={closeModal}
                  type="button"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </tr>
    );
};

export default LessonRow;

LessonRow.propTypes = {
    lesson: PropTypes.object,
    refetch: PropTypes.func
}