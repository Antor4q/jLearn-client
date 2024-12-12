import { useMutation } from "@tanstack/react-query";
import PropTypes from "prop-types"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import usePubAxios from "../../../hooks/usePubAxios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const VocabularyRow = ({vocabulary,refetch}) => {

    const axiosApi = usePubAxios()
    const [isModalOpen, setIsModalOpen] = useState(false);

    // update vocabulary api
    const { mutateAsync:updateVocabulary } = useMutation({
        mutationKey: ["updateVocabulary"],
        mutationFn: async (updatedVocabulary) => {
          const { data } = await axiosApi.patch(`/vocabulary-update/${vocabulary._id}`, updatedVocabulary);
          return data;
        },
        onSuccess: () => {
          refetch();
          setIsModalOpen(false);
          toast.success("Vocabulary updated successfully");
        },
      });

      const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const word = form.word.value;
        const meaning = form.meaning.value;
        const pronunciation = form.pronunciation.value;
        const whenToSay = form.whenToSay.value;
        const lessonNo = form.lessonNo.value;
        const lessonName = form.lessonName.value;
    
        const updatedVocabulary = {
          word,
          meaning,
          pronunciation,
          whenToSay,
          lessonNo,
          lessonName
        };
    
        updateVocabulary(updatedVocabulary);
      };

    // delete vocabulary mutation api
    const {mutateAsync} = useMutation({
        mutationKey: ['delVocabulary'],
        mutationFn: async(id) =>{
            const {data} = await axiosApi.delete(`/vocabulary-del/${id}`)
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

    return (
        <tr>
        <td>{vocabulary?.word}</td>
        <td>{vocabulary?.meaning}</td>
        <td>{vocabulary?.pronunciation}</td>
        <td>{vocabulary?.whenToSay}</td>
        <td>{vocabulary?.lessonNo}</td>
        <td><button onClick={openModal} className="text-white p-2 bg-blue-600 rounded-xl text-xl font-medium"><FaEdit/></button> <Toaster/></td>
        <td><button  onClick={()=>handleDelete(vocabulary?._id)} className="text-white bg-red-500 p-2 rounded-xl text-xl font-medium"><MdDelete/></button>
        <Toaster/></td>

         {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Update Vocabulary</h2>

            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Word</label>
                <input
                  type="text"
                  name="word"
                  defaultValue={vocabulary.word}
                  placeholder="Enter Japanese word"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Meaning</label>
                <input
                  type="text"
                  name="meaning"
                  defaultValue={vocabulary.meaning}
                  placeholder="Enter meaning"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Pronunciation</label>
                <input
                  type="text"
                  name="pronunciation"
                  defaultValue={vocabulary.pronunciation}
                  placeholder="Enter pronunciation (e.g., Konnichiwa)"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">When to Say</label>
                <input
                  type="text"
                  name="whenToSay"
                  defaultValue={vocabulary.whenToSay}
                  placeholder="Enter when to say (e.g., Used for greeting)"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Lesson No</label>
                <input
                  type="number"
                  name="lessonNo"
                  defaultValue={vocabulary.lessonNo}
                  placeholder="Enter Lesson No"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Lesson Name</label>
                <input
                  type="text"
                  name="lessonName"
                  defaultValue={vocabulary.lessonName}
                  placeholder="Enter Lesson Name"
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

export default VocabularyRow;

VocabularyRow.propTypes = {
    vocabulary : PropTypes.object,
    refetch: PropTypes.func
}