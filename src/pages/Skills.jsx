import React from "react";
import { Card } from "react-bootstrap";

const Skills = () => {
  return (
    <div className="card-container">
      <h2>My skills:</h2>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <i className="fa-brands fa-html5"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Html</Card.Subtitle>
            <Card.Text className="html-color">
    
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <i className="fa-brands fa-css3-alt"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">CSS</Card.Subtitle>
            <Card.Text className="css-color">
             
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <i className="fa-brands fa-js"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Java Script
            </Card.Subtitle>
            <Card.Text className="js-color">
              
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <i className="fa-brands fa-react"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              React
            </Card.Subtitle>
            <Card.Text className="react-color">
              
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
