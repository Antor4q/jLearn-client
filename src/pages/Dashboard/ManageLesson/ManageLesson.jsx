
import useLessons from "../../../hooks/useLessons";
import LessonRow from "./LessonRow";


const ManageLesson = () => {

    const [data] = useLessons()
    console.log(data)
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
                     {/* row here */}
                     {
                        data?.map((lesson,index)=> <LessonRow key={index} lesson={lesson}/>)
                     }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default ManageLesson;