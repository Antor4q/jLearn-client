
import { Link } from "react-router-dom";
import tutorial from "../../../../../public/tut1.jpg"




const Lessons = () => {
    

  //  const [data,isLoading] = useLessons()

      const lessons = [
        { id: 1, name: 'Basic Greetings', number: 1, vocabCount: 10 },
        { id: 2, name: 'Common Phrases', number: 2, vocabCount: 15 },
        { id: 3, name: 'Numbers & Counting', number: 3, vocabCount: 12 },
        { id: 4, name: 'Time & Dates', number: 4, vocabCount: 8 },
        { id: 5, name: 'Family & Relationships', number: 5, vocabCount: 14 },
        { id: 6, name: 'Food & Beverages', number: 6, vocabCount: 18 },
        { id: 7, name: 'Shopping & Essentials', number: 7, vocabCount: 9 },
        { id: 8, name: 'Travel & Directions', number: 8, vocabCount: 13 },
        { id: 9, name: 'Weather & Seasons', number: 9, vocabCount: 11 },
        { id: 10, name: 'Emergency Situations', number: 10, vocabCount: 7 },
      ];
      


    return (
        <div>
            <div
        className="w-full relative h-[400px] bg-no-repeat bg-cover bg-center"
        style={{
            backgroundImage: `url(${tutorial})`,
        }}
        >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 grid justify-center items-center h-full text-white p-8">
            <div>
            <h1 className="lg:text-4xl text-2xl font-bold mb-3">Home/Lessons</h1>
            <p>Journey Through Japanese Lessons</p>
            </div>
        </div>
      </div>
        <div className="lg:max-w-[1240px] px-4 lg:px-0 mx-auto relative">
             <div className="grid lg:my-20 my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold">{lesson.name}</h2>
            <p className="text-gray-600">Lesson Number: {lesson.number}</p>
            <p className="text-gray-600">Vocab Count: {lesson.vocabCount}</p>
            <Link
              to={`/lessons/${lesson.id}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Start Lesson
            </Link>
          </div>
        ))}
      </div>
       
       
      </div>
        </div>
    );
};

export default Lessons;