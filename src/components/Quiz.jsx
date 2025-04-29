import { useState } from "react"
import QUESTION_DATA from "../data/data"
import Results from "./Results";
const Quiz = () => {

    const answers = [null, null, null, null, null]

    const [userAnswers, setUserAnswers] = useState(answers);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const isUserAnswer = userAnswers[currentQuestion];
    const [isQuizFinish, setisQuizFinish] = useState(false);

    const handleChoices = (choice) => {
        const newUserAnswer = [...userAnswers];
        newUserAnswer[currentQuestion] = choice;
        setUserAnswers(newUserAnswer);
        console.log(userAnswers);
    }
    const handlePrev = () => {
        if(currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }
    const handleNext = () => {
        if(currentQuestion === QUESTION_DATA.length - 1) {
            setisQuizFinish(true);
        }
    
       setCurrentQuestion(currentQuestion + 1);
    }
    const restartQuiz = () => {
        setUserAnswers(answers);
        setCurrentQuestion(0);
        setisQuizFinish(false);
    }

    if(isQuizFinish){
        return <Results userAnswers={userAnswers} restartQuiz={restartQuiz}/>
    }
  return (
    <div className="flex justify-center items-center p-5 flex-col">
        <div className="flex justify-center items-center flex-col bg-lime-200 px-2 py-7 sm:p-7 space-y-3 rounded-xl mt-5">
            <span className="font-extrabold">Question {currentQuestion + 1}</span>
            <p className="text-center text-gray-900 font-mono">{QUESTION_DATA[currentQuestion].question}</p>
            <div className="flex justify-center items-center space-x-5 w-full">
                {QUESTION_DATA[currentQuestion].choices.map((choice) => (
                    <button className="bg-orange-200 p-1.5 rounded-lg py-1 px-1 hover:bg-orange-300 focus:bg-orange-300 active:bg-orange-400 " onClick={() => handleChoices(choice)}>{choice}</button>
                ))}
            </div>
            <div className="flex justify-center items-center space-x-4 mt-5 font-bold">
                <button className="bg-blue-200 p-1 rounded-lg w-[80px] hover:bg-blue-300 focus:bg-blue-300 active:bg-blue-400" onClick={handlePrev} disabled={currentQuestion === 0}>Prev</button>
                <button className="bg-green-200 p-1 rounded-lg w-[80px] hover:bg-green-300 focus:bg-green-300 active:bg-green-400" onClick={handleNext} disabled={!isUserAnswer}>{currentQuestion + 1 === QUESTION_DATA.length ? "Finish" : "Next"}</button>
            </div>
        </div>
    </div>
  )
}

export default Quiz