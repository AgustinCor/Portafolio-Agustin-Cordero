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
          <a href="https://golden-sorbet-627c87.netlify.app" target="_blank"><img src={imagenes.img1} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML,CSS and React</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <a href="https://glittering-cucurucho-d7d955.netlify.app" target="_blank"><img src={imagenes.img2} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML,CSS and React</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <a href="https://capable-crostata-a53208.netlify.app" target="_blank"><img src={imagenes.img3} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML,CSS,React and Redux</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <a href="https://jocular-beijinho-771f1d.netlify.app/" target="_blank"><img src={imagenes.img4} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML,CSS and React</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <a href="https://jovial-tulumba-669c69.netlify.app/" target="_blank"><img src={imagenes.img5} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML,CSS,javaScript</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <a href="https://magical-dango-831743.netlify.app/" target="_blank"><img src={imagenes.img6} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML,CSS and React</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <a href="https://dashing-cobbler-739bee.netlify.app/#footer" target="_blank"><img src={imagenes.img7} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML and CSS</h3>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Projects;
