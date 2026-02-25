import React from 'react'
import Navbar from '../components/Navbar'
import img from "../assets/img1.png"
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen overflow-hidden bg-white text-black'>
      <Navbar />
      {/* top */}
      <section className='max-w-7xl mx-auto px-8 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
        <div>
          <div
            className="transform-gpu hover:rotate-x-6 hover:-rotate-y-6 transition-transform duration-500 animate-fade-in-left"
            style={{ transformStyle: "preserve-3d" }}
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight
              bg-gradient-to-br from-black/90 via-black/60 to-black/90
              bg-clip-text text-transparent hover:-translate-y-1 transition-transform duration-300"
              style={{
                transform: "translateZ(40px)",
                textShadow: "0 18px 40px rgba(0,0,0,0.25)",
              }}
            >
              Create Smart <br /> AI Notes in Seconds


            </h1>

            <p
              className=' mt-6 max-w-xl text-lg
              bg-gradient-to-br from-gray-700 via-gray-500/80 to-gray-700
              bg-clip-text text-transparent hover:-translate-y-1 transition-transform duration-300'
              style={{
                transform: "translateZ(40px)",
                textShadow: "0 18px 40px rgba(0,0,0,0.25)",
              }}
            >
              Generate exam-focused notes, project documentation,
              flow diagrams and revision-ready content using AI —
              faster, cleaner and smarter.

            </p>


          </div>

          <button
            onClick={() => navigate("/notes")}

            className='mt-10 px-10 py-3 rounded-xl
                          flex items-center gap-3
                          bg-gradient-to-br from-black/90 via-black/80 to-black/90
                          border border-white/10
                          text-white font-semibold text-lg
                          shadow-[0_25px_60px_rgba(0,0,0,0.7)] hover:scale-105 active:scale-95 transition-transform duration-300'>

            Get Started


          </button>
        </div>


        <div
          className="transform-gpu hover:-translate-y-3 hover:rotate-x-8 hover:-rotate-y-8 hover:scale-105 transition-all duration-500 animate-fade-in-right"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className='overflow-hidden'>
            <img src={img} alt="img"
              style={{ transform: "translateZ(35px)" }} />

          </div>

        </div>

      </section>

      {/* bottom */}
      <section className='max-w-6xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-4 gap-10'>
        <Feature icon="📘" title="Exam Notes" des="High-yield exam-oriented notes with revision points." />
        <Feature icon="📂" title="Project Notes" des="Well-structured content for assignments and projects." />
        <Feature icon="📊" title="Diagrams" des="Auto-generated visual diagrams for clarity." />
        <Feature icon="⬇️" title="PDF Download" des="Download clean, printable PDFs instantly." />

      </section>
      <Footer />

    </div>
  )
}

function Feature({ icon, title, des }) {
  return (
    <div
      className='relative rounded-2xl p-6
        bg-gradient-to-br from-black/90 via-black/80 to-black/90
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_30px_80px_rgba(0,0,0,0.7)]
        text-white hover:-translate-y-3 hover:rotate-x-8 hover:-rotate-y-8 hover:scale-105 transition-all duration-300'
      style={{ transformStyle: "preserve-3d" }}
    >

      <div className='relative z-10' style={{ transform: "translateZ(30px)" }}>
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{des}</p>

      </div>



    </div>
  )
}

export default Home
