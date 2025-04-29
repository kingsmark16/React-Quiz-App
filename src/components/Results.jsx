import QUESTION_DATA from "../data/data"

QUESTION_DATA
const Results = ({userAnswers, restartQuiz}) => {

    const getScore = () => {
        let currentScore = 0;
        userAnswers.forEach((answers, index) => {
            if(answers === QUESTION_DATA[index].answer){
                currentScore++;
            }
        })
        console.log(currentScore);
        
        return currentScore;
    }

    const finalScore = getScore();

  return (
    <div className="flex justify-center items-center flex-col py-12 space-y-4 bg-lime-200 w-full md:w-[60%] mx-6 rounded-xl">
        <h2 className="font-extrabold">Quiz Completed</h2>
        <p className="font-mono">Your Score: {finalScore}/{QUESTION_DATA.length}</p>
        <button onClick={restartQuiz} className="font-mono bg-green-200 p-1 rounded-lg w-[80px] hover:bg-green-300 focus:bg-green-300 active:bg-green-400">Restart</button>
    </div>
  )
}

export default Results