import PropTypes from "prop-types"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const VocabularyRow = ({vocabulary}) => {
    return (
        <tr>
        <td>{vocabulary?.word}</td>
        <td>{vocabulary?.meaning}</td>
        <td>{vocabulary?.pronunciation}</td>
        <td>{vocabulary?.whenToSay}</td>
        <td>{vocabulary?.lessonNo}</td>
        <td><button className="text-white p-2 bg-blue-600 rounded-xl text-xl font-medium"><FaEdit/></button> </td>
        <td> 
            <button className="text-white bg-red-500 p-2 rounded-xl text-xl font-medium"><MdDelete/></button>
            {/* <Toaster/> */}
            </td>
        </tr>
    );
};

export default VocabularyRow;

VocabularyRow.propTypes = {
    vocabulary : PropTypes.object
}