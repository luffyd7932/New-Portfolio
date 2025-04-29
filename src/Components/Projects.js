import React from 'react';
import ProjectBox from './ProjectBox';
import BB from '../images/BB.png'
import Shield from '../images/shield.png';
import CB from '../images/CB.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={BB} projectName="BudgetByte" />
        <ProjectBox projectPhoto={Shield} projectName="SHIELD" />
        <ProjectBox projectPhoto={CB} projectName="CyberGuard" />
      </div>

    </div>
  )
}

export default Projects