import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types"

const LessonRow = ({lesson}) => {
   
    return (
        <tr className="text-xl font-medium">
        <td>{lesson.number}</td>
        <td>{lesson.name}</td>
        
        <td>10</td>
        <td><button className="text-white p-2 bg-blue-600 rounded-xl text-xl font-medium"><FaEdit/></button></td>
        <td> <button className="text-white bg-red-500 p-2 rounded-xl text-xl font-medium"><MdDelete/></button></td>
      </tr>
    );
};

export default LessonRow;

LessonRow.propTypes = {
    lesson: PropTypes.object
}