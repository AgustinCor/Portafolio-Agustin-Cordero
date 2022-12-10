import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import imagenes from "../assets/images";

const Projects = () => {
  const [info, setInfo] = useState(true);

  const isInfo = () => {
    setInfo(!info);
  };

  return (
    <Carousel>
      <Carousel.Item>
        <div className="pro-img">
          <img src={imagenes.img1} alt="Second slide" />
          <h3 className="h3-desc">Made with:HTML,CSS and React</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <img src={imagenes.img2} alt="Second slide" />
          <h3 className="h3-desc">Made with:HTML,CSS and React</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <img src={imagenes.img3} alt="Second slide" />
          <h3 className="h3-desc">Made with:HTML,CSS,React and Redux</h3>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Projects;
