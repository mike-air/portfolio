import React from "react";
import { Col, Row, ListGroup, ListGroupItem } from "react-bootstrap";

const AboutScreen = () => {
  return (
    <Col className="text-info">
      <h2 className="text-dark">
        About Me <hr></hr>
      </h2>

      <p>
        <h4 className="text-dark">
          I am an energetic ,ambitious person who has develop a mature and
          responsible{" "}
        </h4>
        <p>
          <h4 className="text-dark">
            approach to any task that i undertake or situations that i am
            presented with. As a MERN STACK developer, I am excellent in working
            with others to achieve a certain objective on time and with
            excellence
          </h4>
        </p>
        <p>
          <Row>
            <h3 className="text-dark">Core Skills</h3>
            <hr></hr>
            <Col>
              <ListGroup className="py-4 shadow">
                <h5>
                  <ListGroupItem>MONGO DB</ListGroupItem>{" "}
                  <ListGroupItem>Express</ListGroupItem>
                  <ListGroupItem>React</ListGroupItem>
                  <ListGroupItem>Redux</ListGroupItem>
                  <ListGroupItem>Node</ListGroupItem>
                </h5>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup className="py-4 shadow">
                <h5>
                  <ListGroupItem>Problem-solving capability</ListGroupItem>
                  <ListGroupItem>Communication Skills</ListGroupItem>
                  <ListGroupItem>Creativity</ListGroupItem>
                </h5>
              </ListGroup>
            </Col>
          </Row>
        </p>
      </p>
    </Col>
  );
};

export default AboutScreen;
