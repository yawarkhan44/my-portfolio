import React from "react";
import "./About.scss";
import Experience from "./../Experience/Experience";

const About = () => {
  return (

    <div className="about">
      <div className="leftSection">
        <h1>Skills</h1>
        
      </div>
      <div className="rightSection">
        <Experience />
        <div className="description">
          I am passionate about creating beautiful and intuitive websites.
          I have a strong understanding of HTML, CSS, and JavaScript, and I am always eager to learn new 
          technologies and techniques to improve my skills. 
          <br/>
          <br/>
          As a front-end website developer I am responsible for 
          creating the user interface and experience of a website. This
          includes designing and coding the layout, navigation, and visual 
          elements of a site. I have a good understanding of user experience and
          design principles to create a site that is easy to use and visually appealing.
          I can work closely with back-end developers and designers to bring a website to life.
        </div>
      </div>

    </div>
  );
};

export default About;
