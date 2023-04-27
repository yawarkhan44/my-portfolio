import React from 'react'
import "./Project.scss"

const Project = (props) => {
  return (
    <div>
        <div className="projectContainer">
            <div className="cardWrapper">
                <div className="imageContainer">
                    <a href='https://fastidious-pothos-e49b6e.netlify.app/'>
                        <img src={props.src} alt="" />
                    </a>
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