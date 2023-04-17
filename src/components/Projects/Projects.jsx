import React from 'react'
import Project from '../Project/Project'
import "./Projects.scss"

import Image1 from "./../../images/temptations.jpg"

const Projects = () => {
  return (
    <div className="projects">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="projectsContainer">
        <Project src={Image1} title="Temptations" />
      </div>
    </div>
  )
}

export default Projects