import React from 'react'
import { Element } from 'react-scroll'
import './ExperienceContainer.css'
import Experience from '../Experience/Experience'

const ExperienceContainer = () => {

  const experinceList = [{
    company: "Noble Serve Systems Pvt. Ltd.",
    duration: "Dec 2020 to Sep 2023",
    process : "US-Mortgage Process (BPO)",
    designation: "Senior Process Associate",
    place: "Coimbatore"
  },
  {
    company: "Visionet Systems Pvt. Ltd.",
    duration: "Nov 2015 to Nov 2020",
    process : "US Mortgage Process (BPO)",
    designation: "Senior Process Associate",
    place: "Coimbatore"
  },
  {
    company: "String Information Services Pvt. Ltd.",
    duration: "May 2010 to Nov 2015",
    process : "US Mortgage Process (BPO)",
    designation: "Process Associate",
    place: "Chennai"
  },
]
  return (
    <Element className='experienceContainer' name='experience'>
        <h1>Experience</h1>
        <div className='experienceContainer_box'>
          {experinceList.map((exp, index)=>{
            return(
              <Experience
              key={index} 
              company={exp.company}
              duration={exp.duration}
              process={exp.process}
              designation={exp.designation}
              place={exp.place}
              />
            )
          })}
        </div>
        
    </Element>
  )
}

export default ExperienceContainer