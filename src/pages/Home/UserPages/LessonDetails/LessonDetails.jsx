import { useState } from "react";
import Confetti from "react-confetti";
import { useParams } from "react-router-dom";
import tutorial from "../../../../../public/tut1.jpg"

const LessonDetails = () => {
    const id = useParams()
    console.log(id)
    const vocabularies = [
        { word: "こんにちは", pronunciation: "konnichiwa", whenToSay: "Hello in Japanese", lesson:"Basic Greetings" },
        { word: "ありがとう", pronunciation: "arigatou", whenToSay: "Thank you",lesson:"Basic Greetings" },
        { word: "さようなら", pronunciation: "sayounara", whenToSay: "Goodbye",lesson:"Basic Greetings" },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [showConfetti, setShowConfetti] = useState(false);
    
      const handleNext = () => {
        if (currentIndex < vocabularies.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      };
    
      const handlePrevious = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      };
    
      const handleComplete = () => {
        setShowConfetti(true)
        setTimeout(() => {
          window.location.href = "/lessons"; 
        }, 3000);
      };
    
      const playPronunciation = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP'; 
        window.speechSynthesis.speak(utterance);
      };
      

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
            <h1 className="lg:text-4xl text-2xl font-bold mb-3">Home/Lessons/details</h1>
            <p>Learn vocabularies best way!</p>
            </div>
        </div>
        </div>
          <div className="lg:max-w-[1240px] mx-auto">
            {showConfetti && <Confetti />}
             <h1 className="text-2xl font-bold mb-4 lg:mt-20 mt-10">{vocabularies[currentIndex].lesson}</h1>
             <h1 className="text-xl font-medium mb-4 ">Lesson number 1</h1>
             <h1 className="text-xl font-medium mb-4 ">Vocab count: 10</h1>
        <div className="p-4 md:w-2/5 w-full lg:w-1/3 grid justify-center bg-gray-100 rounded-md">
          <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={()=>playPronunciation(vocabularies[currentIndex].word)}>
            {vocabularies[currentIndex].word}
          </h2>
          <p className="mb-2">Pronunciation: {vocabularies[currentIndex].pronunciation}</p>
          <p className="mb-4">When to Say: {vocabularies[currentIndex].whenToSay}</p>
          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-gray-400 text-white rounded-md"
            >
              Previous
            </button>
            {currentIndex === vocabularies.length - 1 ? (
              <button
                onClick={handleComplete}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Complete
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Next
              </button>
            )}
          </div>
        </div>
        </div>
      </div>
    );
};

export default LessonDetails;