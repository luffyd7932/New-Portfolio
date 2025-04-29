import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
// import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Laxman Desai</h4>
      <h4>Copyright &copy; 2025 LD</h4>
      <div className='footerLinks'>
        <a href="https://github.com/luffyd7932" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/desai-laxman/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:laxmandesai7932@gmail.com' target='_blank'><GrMail/></a>
        {/* <a href="#" target="_blank"><SiLeetcode/></a> */}
      </div>
    </footer>
  )
}

export default Footer