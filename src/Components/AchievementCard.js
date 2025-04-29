import * as React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function AchievementCard({ photo, title, description,link }) {
        

  let show ='';
  if(link===""){
    show="none";
  }

  return (
    <div className="achieveBox" 
    // style={{
    //   width: '350px',
    //   border: '3px solid #19f5af',
    //   borderRadius: '5px',
    //   textAlign: 'center',
    //   padding: '15px',
    //   letterSpacing: '0.5px',
    //   fontSize: '18px',
    //   lineHeight: '22px',
    //   margin: '0px 25px 50px 25px',
    //   transition: '0.5s',
    //   boxShadow: '0 4px 10px 0 #19f5af',
    //   transform: 'scale(1.05)',
    // }}
    >
      <img style={{
        width: '100%', 
        height: 'auto', 
        objectFit: 'cover',
      }} src={photo} alt="Project display" />
      <div>
        <br />
        <h3>{title}</h3>
        <br />
        {description}
        <br />
  
        <a style={{display:show}} href={link} target='_blank'>
          <button className='projectbtn'><FaLinkedin/> LinkedIn</button>
        </a>
      </div>
    </div>
  )
  
    }
