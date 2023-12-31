import React from 'react'
import { Element } from 'react-scroll'
import { LinearProgress } from '@mui/material'

import './Skillcontainer.css'
import skillimg from '../../Assets/skills-1.jpg'


const Skillcontainer = () => {
  return (
   <Element className='skillContainer' id='skills'>
    <div className='skillContainer_image'>
        <img src={skillimg} alt="skillimage" />
    </div>
    <div className='skillContainer_text'>
    <h2>SKILLSET</h2>
    <div className='skillContainer_skillset'>
        <h5>HTML</h5>
        <div className='skillContainer_slider'>
            <LinearProgress variant='determinate' value={90}/>
        </div>
    </div>
    <div className='skillContainer_skillset'>
        <h5>CSS</h5>
        <div className='skillContainer_slider'>
            <LinearProgress variant='determinate' value={80}/>
        </div>
    </div>
    <div className='skillContainer_skillset'>
        <h5>React.js</h5>
        <div className='skillContainer_slider'>
            <LinearProgress variant='determinate' value={80}/>
        </div>
    </div>
    <div className='skillContainer_skillset'>
        <h5>Node.js</h5>
        <div className='skillContainer_slider'>
            <LinearProgress variant='determinate' value={75}/>
        </div>
    </div>
    <div className='skillContainer_skillset'>
        <h5>Express.js</h5>
        <div className='skillContainer_slider skillContainer_slider5'>
            <LinearProgress variant='determinate' value={60}/>
        </div>
    </div>
    <div className='skillContainer_skillset'>
        <h5>MySQL</h5>
        <div className='skillContainer_slider skillContainer_slider6'>
            <LinearProgress variant='determinate' value={60}/>
        </div>
    </div>
    <div className='skillContainer_skillset'>
        <h5>MongoDB</h5>
        <div className='skillContainer_slider skillContainer_slider7'>
            <LinearProgress variant='determinate' value={80}/>
        </div>
    </div>
    </div>
   </Element>
  )
}

export default Skillcontainer