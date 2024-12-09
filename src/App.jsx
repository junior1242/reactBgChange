
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
            <button
              className="bg-yellow-400 p-4 text-white font-bold rounded-2xl border-black"
              onClick={() => setcolor("Gray")}
              style={{ backgroundColor: "Gray" }}
            >
              Gray
            </button>
            <button
              className="bg-yellow-400 p-4 text-white font-bold rounded-2xl border-black"
              onClick={() => setcolor("Gray")}
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              className="bg-yellow-400 p-4 text-white font-bold rounded-2xl border-black"
              onClick={() => setcolor("Black")}
              style={{ backgroundColor: "Black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App


