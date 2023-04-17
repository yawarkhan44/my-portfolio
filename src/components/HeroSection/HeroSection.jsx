import React from 'react'
import "./HeroSection.scss"

import Image from "./../../images/pc.png"

import {motion, Variants} from "framer-motion"

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="leftSection">
        <h1>Title</h1>
        <div className="mission">
          <div className="line">—</div>
          <div className="missionLine">
            Lorem ipsum dolor
          </div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Consequuntur atque libero doloribus voluptatem eveniet, 
          ducimus necessitatibus veritatis asperiores fugiat animi 
          rerum dignissimos ea quia dolores similique? Nulla perspiciatis
          id aperiam!
        </div>
        <button>
          Learn More!
        </button>
      </div>
      <motion.div className="rightSection"
      initial={{y: 0}}
      animate={{ y: [0, 20, 0]}}
      transition={{
        duration: 4,
        repeat: Infinity}}
      >
        <img src={Image} alt="" className="heroImage" />
      </motion.div>

    </div>
  )
}

export default HeroSection