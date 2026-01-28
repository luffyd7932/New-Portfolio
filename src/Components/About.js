import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/globe.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>

          <p>
            I have participated in multiple hackathons and enjoyed working in fast-paced team environments.
            I won <b>CodeFiesta 5.0</b> at SKSVMACET, Laxmeshwar, where my team developed a smart meal planner.
            I was also the <b>Runner-up</b> at <b>Hack to Future</b>, a 24-hour hackathon, for building a solution
            that gamified Cyber Security awareness.
            <br/><br/>
            I enjoy building original projects, especially backend systems and APIs.
            You can explore some of my work in the projects section.
            <br/><br/>
            I am <b>open</b> to new opportunities and collaborations where I can learn, contribute,
            and grow as an engineer. Feel free to connect with me — you can find my links in the footer.
            <br/><br/>
            Apart from development, I also have a strong interest in <b>Data Structures, Algorithms,
            and problem solving</b>.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Android' />
        <Skills skill='SpringBoot' />
        {/* <Skills skill='ReactNative'/> */}
        <Skills skill='MySql' />
        {/* <Skills skill='Mongo' /> */}
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Java' />
        <Skills skill='Salesforce' />
        {/* <Skills skill='Jetpack'/> */}
        <Skills skill='React'/>
        <Skills skill='C' />
        <Skills skill='Postman' />
        {/* <Skills skill='Figma' /> */}
        <Skills skill='Firebase' />
        <Skills skill='Render' />
        <Skills skill='Linux'/>
      </div>
    </>
  )
}

export default About;
