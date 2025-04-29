import Quiz from "./components/Quiz"
function App() {
  

  return (
    <div className="bg-green-200 h-dvh flex items-center justify-center relative">
      <h2 className="text-gray-700 text-2xl md:text-3xl lg:text-4xl bg-orange-300 rounded-md px-5 py-3 font-extrabold mb-5 absolute top-10">QUIZ APP</h2>
      <Quiz/>
    </div>
  )
}

export default App
