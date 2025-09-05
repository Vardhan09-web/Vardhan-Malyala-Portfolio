import React from 'react'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'

const App = () => {
  return (
    <>
      <Background />
      <div className="relative z-10 overflow-x-hidden">
        <Navbar />
        <Hero />
        <div>
          <Skills/>
          <Projects/>
        </div>
      </div>
    </>
  )
}

export default App
