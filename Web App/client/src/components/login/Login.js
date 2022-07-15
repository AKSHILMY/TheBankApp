import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: "60vh" }}
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 login-row">
          <Form.Group md="4" controlId="validationCustomUSername">
            <Form.Label>Username</Form.Label>
            <Form.Control required type="text" placeholder="Username" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Invalid username
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3 login-row">
          <Form.Group md="4" controlId="validationCustomPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
            <Form.Control.Feedback type="invalid">
              Invalid password
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}

export default Login;
