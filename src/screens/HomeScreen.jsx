import React from "react";
import { Row, Col, Image } from "react-bootstrap";
const HomeScreen = () => {
  return (
    <Row className="mt-5 ">
      <Col className="mt-5">
        <h1>MICHAEL </h1>
        <h1>ANDERSON</h1>
        <h4 className='mt-5 text-info'>I am a FULL STACK DEVELOPER</h4>
      </Col>
      <Col className="mt-5">
        <Image src={"/images/code.jpg"} fluid/>
      </Col>
    </Row>
  );
};

export default HomeScreen;
