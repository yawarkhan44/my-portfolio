import React from 'react'
import "./HeroSection.scss"

import Image from "./../../images/bg.png"

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="leftSection">
        <h1 className="title">Title</h1>
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
        <button className="learnMore">
          Learn More!
        </button>
      </div>
      <div className="rightSection">
        <img src={Image} alt="" className="heroImage" />
      </div>

    </div>
  )
}

export default HeroSection