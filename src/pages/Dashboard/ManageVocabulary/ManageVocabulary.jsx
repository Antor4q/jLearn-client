import { useState } from "react";
import useVocabularies from "../../../hooks/useVocabularies";
import VocabularyRow from "./VocabularyRow";
import usePubAxios from "../../../hooks/usePubAxios";
import { MdAdd } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";


const ManageVocabulary = () => {

    const [vocabularies,refetch] = useVocabularies()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const axiosApi = usePubAxios()

    // vocabulary create func
    const {mutateAsync} = useMutation({
        mutationKey: ["vocabulary"],
        mutationFn: async(vocabulary)=>{
            const {data} = await axiosApi.post("/vocabulary",vocabulary)
            return data
        },
        onSuccess: ()=>{
            refetch()
            setIsModalOpen(false)
            toast.success("You have successfully added a vocabulary")
        }
    })

    const handleLessonCreate = (e) =>{
        e.preventDefault()
        const form = e.target
        const word = form.word.value
        const meaning = form.meaning.value
        const pronunciation = form.pronunciation.value
        const whenToSay = form.whenToSay.value
        const lessonNo = form.lessonNo.value
        const lessonName = form.lessonName.value
        
        const vocabulary = {
            word,
            meaning,
            pronunciation,
            whenToSay,
            lessonNo,
            lessonName,
            adminEmail: "tariquelislam2015@gmail.com"
        }

        mutateAsync(vocabulary)
    }


    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    return (
        <div className="bg-gray-200 min-h-screen lg:px-10">
        <div className="px-4 lg:px-0">
        <h4 className="md:text-4xl  text-2xl font-semibold pt-10">Manage all vocabularies</h4>
        <button onClick={openModal} className="bg-blue-500 px-4  gap-2 mt-6 text-white md:text-xl md:font-medium flex items-center p-3 rounded-xl"><MdAdd/> Create vocabulary</button>
        <Toaster/>
        </div>
           <div className="lg:p-8 my-20  rounded-lg bg-white ">
        
        <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="md:text-xl md:font-medium">
                    
                    <th>Word</th>
                    <th>Meaning</th>
                    <th>Pronunciation</th>
                    <th>When to Say</th>
                    <th>Lesson number</th>
                    <th>Action</th>
                    <th>Action</th>
                   
                </tr>
                </thead>
                <tbody>
                {
                    vocabularies?.map((vocabulary,index) => <VocabularyRow key={index} vocabulary={vocabulary} refetch={refetch}/>)
                }
                </tbody>
            </table>
        </div>
    </div>
     {/* Modal */}
     {isModalOpen && (
  <div className="fixed px-4 lg:px-0 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-4">Create a Vocabulary</h2>
      
      <form onSubmit={handleLessonCreate}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Word</label>
          <input
            type="text"
            name="word"
            placeholder="Enter Japanese word"
            lang="ja"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Meaning</label>
          <input
            type="text"
            name="meaning"
            placeholder="Enter meaning"
            lang="ja"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Pronunciation</label>
          <input
            type="text"
            name="pronunciation"
            placeholder="Enter pronunciation (e.g., Konnichiwa)"
           
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">When to Say</label>
          <input
            type="text"
            name="whenToSay"
            placeholder="Enter when to say (e.g., Used for greeting)"
           
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Lesson No</label>
          <input
            type="number"
            name="lessonNo"
            placeholder="Enter lesson number"
           
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Lesson Name</label>
          <input
            type="text"
            name="lessonName"
            placeholder="Enter lesson name"
           
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

export default ManageVocabulary;