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
        Name: "",
        Username: "",
        Password: "",
        Account_No: "",
        DOB: "",
        Phone_No: "",
        Email: "",
        account_type: "",
        special_request: "",
        Gender: "",
        amount: "",
        Agent_ID: "",
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

  handleFixed = () => {
    this.setState({ fixed: true, type: false, saving: false });
  };

  handleSaving = () => {
    this.setState({ fixed: false, type: false, saving: true });
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
            <Form.Group as={Col} md="3" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                defaultValue={this.state.customer.Name}
                onChange={(e) => {
                  this.handleChange({ Name: e.target.value });
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom02">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Username"
                defaultValue={this.state.customer.Username}
                onChange={(e) => {
                  this.handleChange({ Username: e.target.value });
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustomUsername">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Password"
                defaultValue={this.state.customer.Password}
                onChange={(e) => {
                  this.handleChange({ Password: e.target.value });
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please input a password
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustomUsername">
              <Form.Label>Gender</Form.Label>
              <Form.Select
                required
                defaultValue={this.state.customer.Gender}
                onChange={(e) => {
                  this.handleChange({ Gender: e.target.value });
                }}
              >
                <option disabled value="">
                  Choose..
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please input the gender.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Account_No</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Account Number"
                defaultValue={this.state.customer.gender}
                onChange={(e) => {
                  this.handleChange({ Account_No: e.target.value });
                }}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please input the Account number.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of birth"
                defaultValue={this.state.customer.DOB}
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
                defaultValue={this.state.customer.Phone_No}
                required
                onChange={(e) => {
                  this.handleChange({ Phone_No: e.target.value });
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
                defaultValue={this.state.customer.Email}
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
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                required
                placeholder="Provide an amount"
                defaultValue={this.state.customer.amount}
                onChange={(e) => {
                  this.handleChange({ amount: e.target.value });
                }}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Amount is not valid.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Account Type</Form.Label>
              <Form.Select
                required
                defaultValue={this.state.customer.account_type}
                onChange={(e) => {
                  this.handleChange({ account_type: e.target.value });
                }}
              >
                <option disabled value="">
                  Choose..
                </option>
                <option value="Adult">Adult</option>
                <option value="Child">Child</option>
                <option value="Join">Join</option>
                <option value="Senior">Senior</option>
                <option value="Teen">Teen</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please input an account type.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Special Request</Form.Label>
              <Form.Select
                required
                defaultValue={this.state.customer.special_request}
                onChange={(e) => {
                  this.handleChange({ special_request: e.target.value });
                }}
              >
                <option disabled value="">
                  Choose..
                </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please Select
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Assign Agent</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Input Agent ID"
                defaultValue={this.state.customer.Agent_ID}
                onChange={(e) => {
                  this.handleChange({ Agent_ID: e.target.value });
                }}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please input an agent ID.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button variant="success" type="submit">
            Create an Account
          </Button>
        </Form>
      </Container>
    );
  }
}
