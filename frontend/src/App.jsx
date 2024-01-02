import React, { useState } from "react"
import axios from "axios"

const App = () => {
  const [genImage, setGenImage] = useState(null)
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const surpriseOptions = [
    "A blue ostrich eating a melon",
    "A matisse style shark on the telephone",
    "A pineapple sunbathing on an island",
    "A chimpanzee and a bear discussing politics",
  ]

  const getImage = async () => {
    setLoading(true)
    try {
      const data = await axios.post("http://localhost:8000/images", {
        input,
      })
      const imageData = data.data.image.data[0]
      setGenImage(imageData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-slate-800 flex items-center justify-center">
      <div className="w-[1000px] h-full py-5 flex flex-col items-center">
        <div>
          <h1 className="text-4xl font-bold uppercase mb-8 text-white">
            Dall-e
          </h1>
        </div>
        <div className="mb-8 w-full flex">
          <input
            type="text"
            placeholder="A walking snake..."
            className="px-3 py-2 w-full mr-4 rounded-lg text-white bg-slate-700 outline-none"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={getImage}
            className="text-white mr-4 bg-slate-700 px-4 py-3 hover:bg-slate-900 duration-300 rounded-lg"
          >
            Generate
          </button>
          <button className="text-white bg-slate-700 px-4 py-3 hover:bg-slate-900 duration-300 rounded-lg">
            Surprise Me
          </button>
        </div>
        <button className="text-white px-4 py-3 mb-8 bg-slate-700 hover:bg-slate-900 duration-300 rounded-lg">
          Upload Image
        </button>
        <div className="w-full h-1/2 flex items-center justify-center">
          {loading ? (
            <p className="text-white text-xl">Loading...</p>
          ) : (
            <img
              src={genImage?.url}
              alt="AI Generated Image"
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
