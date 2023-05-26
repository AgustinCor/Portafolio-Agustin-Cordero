import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import imagenes from "../assets/images";

const Projects = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <div className="pro-img">
          <h3>Pokedex </h3> <i>(Pokemons cards page.You will find all their types and statistics.)</i>
          <a href="https://golden-sorbet-627c87.netlify.app" target="_blank"><img src={imagenes.img1} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML,CSS and React</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <h3>Rick and Morty wiki</h3> <i>(All the characters of Rick and Morty universe are here.)</i>
          <a href="https://glittering-cucurucho-d7d955.netlify.app" target="_blank"><img src={imagenes.img2} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML,CSS and React</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <h3>E-Store</h3><i>(My first ecommerce.The products can be amounted and deleted in the cart.)</i>
          <a href="https://capable-crostata-a53208.netlify.app" target="_blank"><img src={imagenes.img3} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML,CSS,React and Redux</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <h3>Weather-Web</h3><i>(The web shows you the weather forecast.)</i>
          <a href="https://jocular-beijinho-771f1d.netlify.app/" target="_blank"><img src={imagenes.img4} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML,CSS and React</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <h3>Box-shadow web</h3><i>(The Box-shadow css property can be manipulated here.)</i>
          <a href="https://jovial-tulumba-669c69.netlify.app/" target="_blank"><img src={imagenes.img5} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML,CSS,javaScript</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <h3>Quotes cards</h3><i>(You acces to random quotes cards with corious phrases.)</i>
          <a href="https://magical-dango-831743.netlify.app/" target="_blank"><img src={imagenes.img6} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML,CSS and React</h3>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="pro-img">
          <h3>Portfolio design</h3><i>(This is only a css work.A portflio prototype)</i>
          <a href="https://dashing-cobbler-739bee.netlify.app/#footer" target="_blank"><img src={imagenes.img7} alt="Second slide" /></a>
          <h3 className="h3-desc">Made with:HTML and CSS</h3>
        </div>
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default Projects;
