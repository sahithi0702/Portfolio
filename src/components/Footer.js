import './Footer.css'
import React from 'react';
import { FaHome,FaMailBulk,FaPhone,FaLinkedin, FaHackerrank, FaGithub} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
     <div className='footer-container'>
        <div className="left">
         <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
                <p>24-835/3/1,Balanagar</p>
                <p>Hyderabad</p>
            </div>
         </div>
         <div className="phone">
         <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>+91 7569942621
         </h4>
         </div>
        <div className="email">
         <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>penthala.sahithi@gmail.com
         </h4>
         </div>
         </div>
        <div className="right">
         <h4>Career Objective</h4>
         <p>To obtain an entry-level position in a company where I can use my problem-solving,
critical thinking, and communication skills to contribute for the growth and success of the organization.</p>
        <br></br>
        <div className="social">
        <a href="https://www.linkedin.com/in/sahithi-penthala-639166215/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
    </a>
    <a href="https://www.hackerrank.com/penthala_sahithi" target="_blank" rel="noopener noreferrer">
    <FaHackerrank size={30} style={{color:"#fff",marginRight:"1rem"}}/>
    </a>
    <a href="https://github.com/sahithi0702" target="_blank" rel="noopener noreferrer">
    <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/>
    </a>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Footer;
