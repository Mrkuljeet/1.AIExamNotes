import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TopicForm from '../components/TopicForm'
import Sidebar from '../components/Sidebar'
import FinalResult from '../components/FinalResult'
function Notes() {
  const navigate = useNavigate()
  const { userData } = useSelector((state) => state.user)
  const credits = userData.credits
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8'>
      <header
        className=" mb-10
            rounded-2xl
            bg-black/80 backdrop-blur-xl
            border border-white/10
            px-8 py-6
            shadow-[0_20px_45px_rgba(0,0,0,0.6)] items-start
            flex md:items-center justify-between gap-4 flex-col md:flex-row animate-fade-in-down"
      >
        <div onClick={() => navigate("/")} className='cursor-pointer'><h1 className='text-2xl font-bold
            bg-linear-to-r from-white via-gray-300 to-white
            bg-clip-text text-transparent'>ExamNotes AI</h1>
          <p className='text-sm text-gray-300 mt-1'>AI-powered exam-oriented notes & revision</p></div>

        <div className='flex items-center gap-4 flex-wrap'>
          <button className='flex items-center gap-2 
    px-4 py-2 rounded-full
    bg-white/10
    border border-white/20
    text-white text-sm cursor-pointer hover:bg-white/20 transition-colors' onClick={() => navigate("/pricing")}>
            <span className='text-xl'>💠</span>
            <span>{credits}</span>
            <span
              className='ml-2 h-5 w-5 flex items-center justify-center
                        rounded-full bg-white text-black text-xs font-bold hover:scale-110 active:scale-95 transition-transform duration-200'
            >
              ➕

            </span>


          </button>
          <button onClick={() => navigate("/history")} className='px-4 py-3 rounded-full
      text-sm font-medium
      bg-white/10
      border border-white/20
      text-white
      hover:bg-white/20
      transition
      flex items-center gap-2 cursor-pointer'>
            📚 Your Notes


          </button>
        </div>


      </header>


      <div
        className="mb-12">
        <TopicForm loading={loading} setResult={setResult} setLoading={setLoading} setError={setError} />
      </div>


      {loading && (
        <div
          className="text-center text-black font-medium mb-6 animate-pulse"
        >
          Generating exam-focused notes…
        </div>
      )}

      {error && (
        <div className="mb-6 text-center text-red-600 font-medium">
          {error}
        </div>
      )}

      {!result && <div
        className="
              h-64
              rounded-2xl
              flex flex-col items-center justify-center
              bg-white/60 backdrop-blur-lg
              border border-dashed border-gray-300
              text-gray-500
              shadow-inner hover:scale-105 transition-transform duration-300
            ">
        <span className="text-4xl mb-3">📘</span>
        <p className="text-sm">
          Generated notes will appear here
        </p>

      </div>}


      {result && <div
        className='flex flex-col
      lg:grid lg:grid-cols-4
      gap-6 animate-fade-in-up'>

        <div className='lg:col-span-1'>
          <Sidebar result={result} />


        </div>

        <div className='lg:col-span-3
        rounded-2xl
        bg-white
        shadow-[0_15px_40px_rgba(0,0,0,0.15)]
        p-6'>
          <FinalResult result={result} />

        </div>


      </div>
      }
    </div>
  )
}

export default Notes
