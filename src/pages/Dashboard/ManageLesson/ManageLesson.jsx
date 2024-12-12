import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const ManageLesson = () => {
    return (
        <div className="bg-gray-200 h-screen lg:px-10">
             <h4 className="text-4xl font-semibold pt-10">Manage all lessons</h4>

            <div className="lg:p-8 my-10 rounded-lg bg-white ">
            
            <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr className="text-xl font-medium">
                        
                        <th>Lesson number</th>
                        <th>Lessons name</th>
                        <th>Vocabulary count</th>
                        
                        <th>Action</th>
                        <th>Action</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                      <tr className="text-xl font-medium">
                        <td>1</td>
                        <td>Greetings</td>
                        
                        <td>10</td>
                        <td><button className="text-white p-2 bg-blue-600 rounded-xl text-xl font-medium"><FaEdit/></button></td>
                        <td> <button className="text-white bg-red-500 p-2 rounded-xl text-xl font-medium"><MdDelete/></button></td>
                      </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default ManageLesson;