import React, { useState } from 'react'
import "./Project.css"

const Project = ({img, title, description, link}) => {

    const [show, setShow]=useState(false)

  return (
    <a href={link} target='_blank' rel='noreferrer'>
        <div className='project' onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>setShow(false)}>
{
    show ? (
        <div>
<h4>{title}</h4>
<p>{description}</p>
        </div>
    ) : (
    <img src={img} alt="img"/>
    )
}
        </div>
    </a>
  )
}

export default Project