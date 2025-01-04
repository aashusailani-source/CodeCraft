import { useRef } from "react";
// import { useEffect } from "react";
import { useState } from "react";

// let timeRef = 0;
function App() {
  const [time, setTime] = useState(0);

  let timeRef = useRef(null);
  function startTimer() {
    timeRef.current = setInterval(() => 
      {
        setTime((time) => time + 1);
        // console.log("hello")
      }, 1000);
      console.log(timeRef);
  }

  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  } 

  return (
      <div className="flex text-white  flex-col gap-y-8 items-center min-h-screen bg-black">

        <h1 className="text-4xl font-bold mb-6">StopWatch: {time}</h1>

        <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-green-600 transition" onClick={startTimer}>
          Start
        </button>

        <button className="bg-red-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-red-600 transition" onClick={stopTimer}>
          Stop
        </button>

        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-600 transition" onClick={resetTimer}>
          Reset
        </button>

      </div>
  )
}

export default App
