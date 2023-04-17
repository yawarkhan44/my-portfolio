import React from 'react'
import "./Project.scss"

const Project = (props) => {
  return (
    <div>
        <div className="projectContainer">
            <div className="cardWrapper">
                <div className="imageContainer">
                    <img src={props.src} alt="" />
                </div>
                <div className="titleContainer">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project