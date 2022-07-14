import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

class AddAgent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      agent: {
        Name: "",
        Username: "",
        Password: "",
        DOB: "",
        Phone_NO: "",
        Email: "",
        NIC: "",
      },
    };
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      this.props.addHandler(this.state.agent);
      console.log(this.state.agent);
    }
    this.setState({ validated: true });
  };

  handleChange = (user) => {
    const agnt = { ...this.state.agent, ...user };
    this.setState({ agent: agnt });
  };

  render() {
    return (
      <Container className="mt-5">
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Agent Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                defaultValue={this.state.agent.Name}
                onChange={(e) => {
                  this.handleChange({ Name: e.target.value });
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Username"
                defaultValue={this.state.agent.Username}
                onChange={(e) => {
                  this.handleChange({ Username: e.target.value });
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Password"
                defaultValue={this.state.agent.Password}
                onChange={(e) => {
                  this.handleChange({ Password: e.target.value });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please input a password
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>NIC</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="NIC"
                defaultValue={this.state.agent.NIC}
                onChange={(e) => {
                  this.handleChange({ NIC: e.target.value });
                }}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please input the NIC Number.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of birth"
                defaultValue={this.state.agent.DOB}
                required
                onChange={(e) => {
                  this.handleChange({ DOB: e.target.value });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide the Date of Birth.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                defaultValue={this.state.agent.Phone_NO}
                required
                onChange={(e) => {
                  this.handleChange({ Phone_NO: e.target.value });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a phone number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="emial"
                placeholder="example@email.com"
                defaultValue={this.state.agent.Email}
                required
                onChange={(e) => {
                  this.handleChange({ Email: e.target.value });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide an email.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button variant="success" type="submit">
            Add an Agent
          </Button>
        </Form>
      </Container>
    );
  }
}

export default AddAgent;
