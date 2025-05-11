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
                My name is <b>Laxman Desai</b> and I live in Khanapur, Karnataka .
                About my education, I have done my PUC from RL PU college of science Belagavi where I have scored 94%
                in 12th std and Currently I’m pursuing the Bachelor’s degree in <b>Information science and Engg. </b>
                at KLS gogte institute of technology Belagavi , where I have maintained a CGPA of 9.03.
                <br/><br/>
                In terms of skills , I have good knowledge of programming languages
                like <b>Java</b>, <b>C</b> and <b>C++</b>.
                Additionally I have worked on frameworks like <b>Spring boot</b>, <b>Node Js. </b>, <b>Flask
                </b> and <b>React</b>.
                Addition to this I love building my own backends and websites.. <br/><br/>
                Also, I love <b>coffee</b> <CiCoffeeCup style={{scale: "1.5", rotate: "15deg"}}/>
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
