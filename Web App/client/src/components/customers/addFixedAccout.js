import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function AddFixedAccout(props) {
  const [customer, setCustomer] = useState([]);
  const [validated, setValidated] = useState(false);

  let { id } = useParams();
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      props.addHandler({
        ...customer,
        Customer_ID: id,
        DateofDeposit: new Date().toISOString().slice(0, 10),
      });
      navigate(`../customerDetails/${id}`);
    }
    setValidated(true);
  };

  const handleChange = (user) => {
    setCustomer({ ...customer, ...user });
  };

  return (
    <Container className="mt-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Fixed Account Number</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Account Number"
              defaultValue=""
              onChange={(e) => {
                handleChange({ Account_No: e.target.value });
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Please input the Account Number.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Period</Form.Label>
            <Form.Select
              required
              defaultValue=""
              onChange={(e) => {
                handleChange({ Period: e.target.value });
              }}
            >
              <option disabled value="">
                Choose..
              </option>
              <option value="0.5">6 months</option>
              <option value="1">1 year</option>
              <option value="3">3 years</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please Select
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              required
              placeholder="Provide an amount"
              defaultValue=""
              onChange={(e) => {
                handleChange({ Amount: parseFloat(e.target.value) });
              }}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Amount is not valid.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button
          className="me-3"
          variant="secondary"
          type="button"
          onClick={() => {
            navigate(`../customerDetails/${id}`);
          }}
        >
          Back
        </Button>
        <Button variant="success" type="submit">
          Create a fixed account
        </Button>
      </Form>
    </Container>
  );
}
