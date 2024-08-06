
import { useState } from 'react'
function App() {
  const [color, setcolor] = useState("seagreen");
  return (
    <>
      <div
        className=" flex w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="p-4">
          <div className="flex flex-col gap-5  p-4 rounded">
            <button
              className=" bg-red-400 p-4 text-white font-bold rounded-2xl "
              onClick={() => setcolor("red")}
              style={{ backgroundColor: "red" }}
            >
              red
            </button>
            <button
              className="bg-green-400 p-4 text-white font-bold rounded-2xl "
              onClick={() => setcolor("green")}
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              className="bg-blue-400 p-4 text-white font-bold rounded-2xl "
              onClick={() => setcolor("blue")}
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              className="bg-yellow-400 p-4 text-white font-bold rounded-2xl "
              onClick={() => setcolor("yellow")}
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>

            {/*            
              <button
              onClick={() => setcolor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App


