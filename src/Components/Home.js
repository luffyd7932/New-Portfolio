import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/homeAnimation1.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/LaxmanDesai.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>LAXMAN DESAI</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>Introduction</b></h1>
            <p>
              Hi, I’m <b>Laxman Desai</b> from Khanapur, Karnataka.
              I’m currently pursuing my Bachelor’s degree in <b>Information Science and Engineering</b> 
              at <b>KLS Gogte Institute of Technology, Belagavi</b>, with a CGPA of <b>9.03</b>.
              I completed my PUC from <b>RL PU College of Science, Belagavi</b>, where I scored <b>94%</b>.
              <br/><br/>
              I’m currently working as a <b>Software Developer Intern</b> at <b>Falabella India</b>, 
              where I’m gaining hands-on experience in building and maintaining backend systems.
              <br/><br/>
              I have hands-on experience in building backend systems and web applications.
              My core programming skills include <b>Java</b>, <b>C</b>, and <b>C++</b>.
              I’ve worked with frameworks and technologies such as <b>Spring Boot</b>, <b>Node.js</b>, 
              <b>Flask</b>, and <b>React</b>.
              <br/><br/>
              I enjoy designing APIs, working with databases, and building scalable backend solutions.
              I like learning how real production systems work and solving practical engineering problems.
              <br/><br/>
              And yes, I run on <b>coffee</b> <CiCoffeeCup style={{scale: "1.5", rotate: "15deg"}}/>
            </p>
        </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Tilt>
                  <img className='Avatar' src={Avatar} alt="" />
              </Tilt>
          </div>

      </div>
    </div>
  )
}

export default Home
