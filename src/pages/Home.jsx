import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='home-background'>
          <div className='icon-container'>
            <a target="_blank" href="https://www.linkedin.com/in/agust%C3%ADn-cordero-002557216/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a target="_blank" href="https://github.com/AgustinCor">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <h1>Agustin Cordero</h1>
          <h2>Front-end developer</h2>
        </div>
    );
};

export default Home;