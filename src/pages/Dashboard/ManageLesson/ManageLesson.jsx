
import { MdAdd } from "react-icons/md";
import useLessons from "../../../hooks/useLessons";
import LessonRow from "./LessonRow";
import { useState } from "react";
import usePubAxios from "../../../hooks/usePubAxios";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";


const ManageLesson = () => {

    const [data,isLoading,refetch] = useLessons()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const axiosApi = usePubAxios()

    const {mutateAsync} = useMutation({
        mutationKey: ["lesson"],
        mutationFn: async(lesson)=>{
            const {data} = await axiosApi.post("/lesson",lesson)
            return data
        },
        onSuccess: ()=>{
            refetch()
            setIsModalOpen(false)
            toast.success("You have successfully created a lesson")
        }
    })

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const handleLessonCreate = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const number = form.number.value
        
        const lesson ={
            name,
            number
        }
        mutateAsync(lesson)
    }

    if(isLoading){
        return <span className="text-4xl font-bold text-center">Loading...</span>
    }

    return (
        <div className="bg-gray-200 min-h-screen lg:px-10">
             <div className="px-4 lg:px-0">
             <h4 className="md:text-4xl  text-2xl font-semibold pt-10">Manage all lessons</h4>

            <button onClick={openModal} className="bg-blue-500 px-4  gap-2 mt-6 text-white md:text-xl md:font-medium flex items-center p-3 rounded-xl"><MdAdd/> Create lesson</button>
            <Toaster/>
             </div>

            <div className="lg:p-8 my-20  rounded-lg bg-white ">
            
            <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr className="md:text-xl md:font-medium">
                        
                        <th>Lesson number</th>
                        <th>Lessons name</th>
                        <th>Vocabulary count</th>
                        
                        <th>Action</th>
                        <th>Action</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                     {/* row here */}
                     {
                        data?.map((lesson,index)=> <LessonRow key={index} lesson={lesson} refetch={refetch}/>)
                     }
                    </tbody>
                </table>
            </div>
        </div>

        {/* Modal */}
      {isModalOpen && (
        <div className="fixed px-4 lg:px-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Create a Lesson</h2>
            
           <form onSubmit={handleLessonCreate}>
           <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Lesson Name</label>
              <input
                type="text"
                 name="name"
                placeholder="Enter lesson name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Lesson Number</label>
              <input
                type="number"
              
               name="number"
                placeholder="Enter lesson number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
               type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Save
              </button>
            </div>
           </form>
          </div>
        </div>
      )}
        </div>

        
    );
};

export default ManageLesson;