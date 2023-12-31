import React from 'react'
import './Experience.css'

const Experience = ({company, duration, process, designation, place}) => {
  return (
    <div className='experience'>
        <ul>
          <li> <h4>{company}</h4></li>
          <li>Duration    : {duration}</li>
          <li>Process     : {process}</li>
          <li>Designation : {designation}</li>
          <li>Place       : {place}</li>
        </ul>
    </div>
  )
}

export default Experience