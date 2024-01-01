import React, { useState } from "react"
import axios from "axios"

const App = () => {
  const [genImage, setGenImage] = useState(null)

  const getImage = async () => {
    try {
      const data = await axios.post("http://localhost:8000/images", {
        input: "Test",
      })
      const imageData = data.data.image.data[0]
      setGenImage(imageData)
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
        {/* <div className="w-full h-full grid gap-4 grid-cols-3 grid-rows-3 bg-red-500">
          <div className="w-[250px] h-[250px] bg-blue-400">Img</div>
          <div className="w-[250px] h-[250px] bg-blue-400">Img</div>
          <div className="w-[250px] h-[250px] bg-blue-400">Img</div>
          <div className="w-[250px] h-[250px] bg-blue-400">Img</div>
          <div className="w-[250px] h-[250px] bg-blue-400">Img</div>
          <div className="w-[250px] h-[250px] bg-blue-400">Img</div>
          <div className="w-[250px] h-[250px] bg-blue-400">Img</div>
          <div className="w-[250px] h-[250px] bg-blue-400">Img</div>
          <div className="w-[250px] h-[250px] bg-blue-400">Img</div>
        </div> */}
        <div className="w-full h-1/2">
          <img
            src={genImage?.url}
            alt="AI Generated Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default App
