import React from 'react'
import { Link } from 'react-scroll'
import './Topcontent.css'

const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent_container'>
<h1>Mr. K. R. Sudharson</h1>
<p>Full Stack Developer (MERN)</p>
<p>I am a Full Stack Developer (MERN) with training from a reputable institute. Seeking a job in FSD-MERN. <br/>Experienced in US mortgage process (BPO) with excellent work efficiency and quick learning capabilities.</p>
<a href="https://drive.google.com/file/d/1rbfC0--x1_PpPuplba_YfffYcQ-Mgj4k/view?usp=drive_link" target='_blank' rel="noreferrer">
    <button className='downloadbtn'>Download CV</button>
</a>
<Link to='projects' smooth={true} duration={500}>
<button className='workbtn'>My Work</button>
</Link>
        </div>
    </div>
  )
}

export default Topcontent