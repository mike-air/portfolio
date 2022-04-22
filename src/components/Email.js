// Your imports...
import UseEmail from "./UseEmail";
import { Form, Button, Col } from "react-bootstrap";
import { useState } from "react";
function Email() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // You don't need to manage state by yourself
  // use the variables below
  const end_point =
    "https://public.herotofu.com/v1/e81a23c0-c0ba-11ec-abfb-2b5c80ae2a8a";
  const { loading, submitted, error, sendEmail } = UseEmail(end_point);

  const submitHandler = () => {
    // Can be any data, static and dynamic
    sendEmail({
      From: email,
      date: new Date().toISOString().substring(0, 10),
      info: message,
    });
      setEmail('')
      setMessage('')
  };

  return (
    <div className="App">
      <div></div>
      <div className='container  ml-5'>
        <Form
          onSubmit={submitHandler}
          className=" container p-5  "
        >
          {" "}
          {submitted && (
            <h5 className="text-success">
              {"Done, message was sent, I will get back to you!"}
            </h5>
          )}
          {error ? `Unexpected error: ${error}` : null}
          {loading && "Message is being sent now..."}
          <Form.Group controlId={email}>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId={message}>
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="textarea"
              className="p-5  "
              placeholder="Enter message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Form>
        <Button
          className="btn btn-block bg-dark "
          variant="light"
          type="submit"
          onClick={submitHandler}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
export default Email;
