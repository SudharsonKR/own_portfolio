import React from 'react'
import Header from './components/Header/Header'
import Topcontainer from './components/Topcontainer/Topcontainer'
import Skillcontainer from './components/Skillcontainer/Skillcontainer'
import Projectcontainer from './components/Projectcontainer/Projectcontainer'
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer'
import Contact from './components/Contact/Contact'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Topcontainer/>}/>
      <Route path="/skills" element={<Skillcontainer/>}/>
      <Route path="/projects" element={<Projectcontainer/>}/>
      <Route path="/experiences" element={<ExperienceContainer/>}/>
      <Route path="/contact" element={<Contact/>}/>    
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App