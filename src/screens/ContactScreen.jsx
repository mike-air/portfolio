import React from "react";
import { Form, Button,Container } from "react-bootstrap";
import Email from "../components/Email";
const ContactScreen = () => {
  return (
    <Container className='mt-5 p-2'>
        <h2>Contact</h2>
      <Email/>
    </Container>
  );
};

export default ContactScreen;
