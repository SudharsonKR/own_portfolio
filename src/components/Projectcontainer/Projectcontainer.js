import React from 'react'
import { Element } from 'react-scroll'

import Project from '../Project/Project'
import './Projectcontainer.css'

const Projectcontainer = () => {

  const projectList = [
    {
      image: require('../../Assets/stackOverflowClone.jpg'),
      title: "stackOverflowclone",
      description: "This project made by MERN",
      link: "https://chic-melba-b08a27.netlify.app/"
    },
    {
      image: require('../../Assets/Inventory Managment.jpg'),
      title: "Inventory Managment",
      description: "This project made by MERN",
      link: "https://lustrous-gingersnap-609a35.netlify.app/"
    },
    {
      image: require('../../Assets/E-Commerce.JPG'),
      title: "E-Commerce",
      description: "Mobile Stores project done by MERN",
      link: "https://jovial-mandazi-8c6ad2.netlify.app/"
    },
    
  ]
 
  return (
    <Element className='projectContainer' id='projects'>
      <h1>Projects</h1>
      <p>Here are some projects done for your reference</p>
      <div className='projectContainer_projects'>
        {
          projectList.map((project, index)=>{
            return(
              <Project key={index} img={project.image} title={project.title} description={project.description} link={project.link}/>
            )
          })
        }
      </div>
    </Element>
  )
}

export default Projectcontainer