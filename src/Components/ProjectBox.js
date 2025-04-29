import React from 'react';
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const projectData = {
    BudgetByte: {
      desc: "Budget Bite is a smart Android/iOS app that helps users plan healthy, affordable meals tailored to their budget and dietary needs. With features like smart recipe suggestions, daily meal plans with cost estimates, a grocery list exporter, and WearFit integration for real-time health data syncing, it makes nutritious eating simple and personalized.",
      github: "#"
    },
    SHIELD: {
      desc: "Shield is a robust security application designed to protect users from SMS, email, and phone number fraud. It features advanced tools including an email breach checker and a password generator, enhancing overall cybersecurity and user protection.",
      github: "#"
    },
    CyberGuard: {
      desc: "An educational platform to raise awareness about cyber-attacks and preventive measures. Features include email breach checks, password security analysis, SMS detection, and interactive challenges for users.",
      github: "#"
    }
  };

  const data = projectData[projectName];
  if (!data) return null;

  return (
    <div className='projectBox'> 
      <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {data.desc}
        <br />
        {data.github && (
          <a href={data.github} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
