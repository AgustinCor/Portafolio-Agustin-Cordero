import React from 'react';
import { Container } from 'react-bootstrap';
import CV from "../assets/Agustin Cordero CV.pdf";

const Home = () => {
    return (
        <div className='home-background'>
          <div className='icon-container'>
            <a target="_blank" href="https://www.linkedin.com/in/agust%C3%ADn-cordero-002557216/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a target="_blank" href="https://github.com/AgustinCor">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={CV} download >
              <i className='cv-icon' >CV</i>
            </a>
          </div>
          <h1>Agustin Cordero</h1>
          <h2>Front-end developer</h2>
        </div>
    );
};

export default Home;