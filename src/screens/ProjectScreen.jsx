import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import projects from "../components/Projects";

const ProjectScreen = () => {
  return (
    <div>
      <Row className='mb-5'>
        <h1>PROJECTS</h1>
        <hr></hr>
        {projects?.map((project) => (
          <Col key={project.id} md={6} sm={12}>
            <a href={project.id} target='_blank' rel="noreferrer">
              <Card className='shadow m-2'>
                <Card.Img className='p-2' rounded fluid src={project.image}></Card.Img>
                <Card.Body>
                  <h3 className='text-info'>{project.name}</h3>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectScreen;
