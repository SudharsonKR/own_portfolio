import React from 'react'
import { Element } from 'react-scroll'

import './Contact.css'
import linkedinimg from '../../Assets/LinkedIn.png'
import gitimg from '../../Assets/Git.png'

const Contact = () => {
  return (
    <Element className='contact' name='contact'>
        <h1>Contact</h1>
        <div className='contact_container'>
        <p>Email : <span style={{color:"yellow"}}>sudharsonkr@gmail.com</span></p>
        <p>Github User Name: <span style={{color:"yellow"}}>SudharsonKR</span></p>
        <div className='contact_link'>
            <a href="https://github.com/SudharsonKR/" target='_blank' rel="noreferrer">
                <img src={gitimg} alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/sudharson-k-r-8b5a88252/" target='_blank' rel="noreferrer">
                <img src={linkedinimg} alt=""/>
            </a>
        </div>
        </div>
        </Element>
  )
}

export default Contact