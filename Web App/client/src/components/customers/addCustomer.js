import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default class addCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      customer: {
        firstName: "",
        lastName: "",
        nic: "",
        address: "",
        gender: "",
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
      this.props.addHandler(this.state.customer);
    }
    this.setState({ validated: true });
  };
  handleChange = (user) => {
    const cust = { ...this.state.customer, ...user };
    this.setState({ customer: cust });
  };
  render() {
    return (
      <Container className="mt-5">
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue={this.state.customer.firstName}
                onChange={(e) => {
                  this.handleChange({ firstName: e.target.value });
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue={this.state.customer.lastName}
                onChange={(e) => {
                  this.handleChange({ lastName: e.target.value });
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>NIC</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="NIC"
                defaultValue={this.state.customer.nic}
                onChange={(e) => {
                  this.handleChange({ nic: e.target.value });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please input NIC
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                required
                defaultValue={this.state.customer.gender}
                onChange={(e) => {
                  this.handleChange({ gender: e.target.value });
                }}
              >
                <option disabled value="">
                  Choose..
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please input the gender.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                defaultValue={this.state.customer.address}
                required
                onChange={(e) => {
                  this.handleChange({ address: e.target.value });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a address.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Submit form</Button>
        </Form>
      </Container>
    );
  }
}
