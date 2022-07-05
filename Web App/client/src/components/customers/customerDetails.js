import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CustomerDetails({ customers, updateCustomer }) {
  let { id } = useParams();
  let navigate = useNavigate();
  const [enableEdit, setEnableEdit] = useState(true);
  const [validated, setValidated] = useState(false);
  const [customerDetail, setCustomerDetail] = useState(
    customers.filter((c) => c.id === parseInt(id))[0]
  );

  const handleChange = (val) => {
    const field = { ...customerDetail, ...val };
    setCustomerDetail(field);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setEnableEdit(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setEnableEdit(true);
      updateCustomer(customerDetail);
      navigate("../");
    }
    setValidated(true);
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Table striped responsive>
          <tbody>
            <tr>
              <th>Account Number</th>
              <td>{customerDetail.Account_No}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>
                <Form.Control
                  type="text"
                  required
                  defaultValue={customerDetail.Name}
                  disabled={enableEdit}
                  onChange={(e) => {
                    handleChange({ firstName: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>
                <Form.Control
                  type="text"
                  required
                  defaultValue={customerDetail.lastName}
                  disabled={enableEdit}
                  onChange={(e) => {
                    handleChange({ lastName: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>
                <Form.Control
                  type="text"
                  required
                  defaultValue={customerDetail.phone}
                  disabled={enableEdit}
                  onChange={(e) => {
                    handleChange({ phone: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <Form.Control
                  type="text"
                  required
                  defaultValue={customerDetail.Email}
                  disabled={enableEdit}
                  onChange={(e) => {
                    handleChange({ email: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>Address</th>
              <td>
                <Form.Control
                  type="text"
                  required
                  defaultValue={customerDetail.address.address}
                  disabled={enableEdit}
                  onChange={(e) => {
                    handleChange({ firstName: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>Balance</th>
              <td colSpan={2}>{customerDetail.maidenName}</td>
            </tr>
            <tr>
              {enableEdit === true ? (
                <td>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() => {
                      navigate("../");
                    }}
                  >
                    Back
                  </Button>{" "}
                  <Button variant="success" type="button" onClick={handleClick}>
                    Edit
                  </Button>{" "}
                </td>
              ) : (
                <td>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() => {
                      navigate("../");
                    }}
                  >
                    Back
                  </Button>{" "}
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>{" "}
                </td>
              )}
            </tr>
          </tbody>
        </Table>
      </Form>
    </Container>
  );
}

export default CustomerDetails;
