import React from 'react'
import "./HeroSection.scss"

import Image from "./../../images/pc.png"

import {motion} from "framer-motion"

const HeroSection = () => {
  return (
    <div className="hero">
      <motion.div className="leftSection"
        initial={{x: -1000}}
        animate={{ x: 0}}
        transition={{
          duration: 1.5,
          delay: 0.3,
          type:'spring',
        bounce: 0.4}}
      >
        <h1>Hi, I'm Yawar, Web developer</h1>
        {/* <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consequuntur atque libero doloribus voluptatem eveniet, 
          ducimus necessitatibus veritatis asperiores fugiat animi 
          rerum dignissimos ea quia dolores similique? Nulla perspiciatis
          id aperiam!
        </div>
        <button>
          Learn More!
        </button> */}
      </motion.div>
      <motion.div className="rightSection"
         initial={{x: 1000}}
         animate={{ x: 0}}
         transition={{
           duration: 1.5,
           delay: 0.7,
           type:'spring',
         bounce: 0.4}}
      >
        <motion.div 
        initial={{y: 0}}
        animate={{ y: [0, 20, 0]}}
        transition={{
          duration: 4,
          repeat: Infinity}}
        >
          <img src={Image} alt="" className="heroImage" />
        </motion.div>

      </motion.div>

      

    </div>
  )
}

export default HeroSection