import React from 'react'
import Header from './components/Header/Header'
import Topcontainer from './components/Topcontainer/Topcontainer'
import Skillcontainer from './components/Skillcontainer/Skillcontainer'
import Projectcontainer from './components/Projectcontainer/Projectcontainer'
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer'
import Contact from './components/Contact/Contact'
import './App.css'


const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Topcontainer/>
      <Skillcontainer/>
      <Projectcontainer/>
      <ExperienceContainer/>
      <Contact/>
      </div>
  )
}

export default App