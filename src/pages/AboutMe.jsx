import React from "react";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div>
        <p>
          <i className="fa-solid fa-quote-left"></i>
          I'm Agustin Cordero,I am fullstack but I prefeer a lot work in
          frontend. I have been developing pages for 1 year.I started learning
          HTML/CSS.When I got my first pages styled in vanilla I decided to
          improve my coding skills in JavaScript to give more life to my pages.
          Thanks for libraries like React the developing has become more easy
          and bearable.
          <i className="fa-solid fa-quote-right"></i>
        </p>
      </div>

      <div className="skills-about">
        <p>About my soft skills I do well in:
            <ul>
                <li><i class="fa-solid fa-map"></i>Estrategic vision</li>
                <li><i class="fa-solid fa-dice"></i>Adaptation to change</li>
                <li><i class="fa-solid fa-face-grin-wide"></i>Emotional inteligence</li>
                <li><i class="fa-solid fa-gauge-high"></i>Productivity</li>
                <li><i class="fa-solid fa-people-group"></i>Team work</li>
                <li><i class="fa-solid fa-hand-peace"></i>Attitud</li>
            </ul>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
