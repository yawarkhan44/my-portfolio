import React from 'react'
import Project from '../Project/Project'
import "./Projects.scss"

import Image1 from "./../../images/temptations.jpg"
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className="projects">
      <motion.div className="title"
        initial={{x: -200}}
        viewport={{once: true, amount : 0.01}}
           whileInView={{ x: 0}}
           transition={{
             duration: 1.5,
             type:'spring',
           bounce: 0.4}}
      >
        <h1>Projects</h1>
      </motion.div>
      <motion.div className="projectsContainer"
        initial={{x: 300}}
        viewport={{once: true, amount : 0.01}}
           whileInView={{ x: 0}}
           transition={{
             duration: 1.5,
             type:'spring',
           bounce: 0.4}}
      >
        <Project src={Image1} title="Temptations" />
      </motion.div>
    </div>
  )
}

export default Projects