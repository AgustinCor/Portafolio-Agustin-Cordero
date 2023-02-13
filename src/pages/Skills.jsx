import React from "react";
import { Card } from "react-bootstrap";
import imagenes from "../assets/images";

const Skills = () => {
  return (
    <div className="card-container">
      <h2></h2>
      <div>
        <Card className="html-card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <i className="fa-solid fa-diamond"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 cart-sign">
              <div>
                <i className="fa-brands fa-html5"></i>
              </div>
            </Card.Subtitle>

            <Card.Text >
              <i className="fa-solid fa-diamond"></i>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="css-card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <i className="fa-solid fa-diamond"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 cart-sign">
              <div>
                <i className="fa-brands fa-css3-alt"></i>
              </div>
            </Card.Subtitle>
            <Card.Text>
              <i className="fa-solid fa-diamond"></i>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="js-card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <i className="fa-solid fa-diamond"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 cart-sign">
              <div>
                <i className="fa-brands fa-js"></i>
              </div>
            </Card.Subtitle>
            <Card.Text >
              <i className="fa-solid fa-diamond"></i>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="react-card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <i className="fa-solid fa-diamond"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 cart-sign">
              <div>
                <i className="fa-brands fa-react"></i>
              </div>
            </Card.Subtitle>
            <Card.Text>
              <i className="fa-solid fa-diamond"></i>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="node-js-card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <i class="fa-solid fa-diamond"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 cart-sign">
              <div>
                <i class="fa-brands fa-node-js"></i>
              </div>
            </Card.Subtitle>
            <Card.Text>
              <i className="fa-solid fa-diamond"></i>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="postgre-card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <i class="fa-solid fa-diamond"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 cart-sign">
              <div>
                <img src={imagenes.postgreicon} alt="" />
              </div>
            </Card.Subtitle>
            <Card.Text>
              <i class="fa-solid fa-diamond"></i>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
