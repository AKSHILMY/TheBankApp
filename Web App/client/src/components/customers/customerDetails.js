import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CustomerDetails({
  customers,
  updateCustomer,
  deleteCustomer,
  fixed,
  fixedDetails,
  withdrawDepositHandler,
}) {
  let navigate = useNavigate();
  let { id } = useParams();
  const [enableEdit, setEnableEdit] = useState(true);
  const [validated, setValidated] = useState(false);
  const [withdraw, setwithdraw] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [customerDetail, setCustomerDetail] = useState(
    customers.filter((c) => c.Customer_ID === parseInt(id))[0]
  );

  const [fixedDetail, setFixedDetail] = useState(
    fixedDetails.filter((c) => c.Customer_ID === parseInt(id))[0]
  );

  const [createFixed, setCreateFixed] = useState(false);

  useEffect(() => {
    setCustomerDetail(
      customers.filter((c) => c.Customer_ID === parseInt(id))[0]
    );
    setFixedDetail(
      fixedDetails.filter((c) => c.Customer_ID === parseInt(id))[0]
    );
  }, [customers, fixed, fixedDetails]);

  const handleChange = (val) => {
    const field = { ...customerDetail, ...val };
    setCustomerDetail(field);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setEnableEdit(false);
  };

  const handleFixed = (e) => {
    e.preventDefault();
    navigate(`../addFixedAccount/${id}`);
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

  const handleDelete = (Account_No, Customer_ID) => {
    deleteCustomer(Account_No, Customer_ID);
    navigate("../");
  };

  const backEditHandler = () => {
    navigate(`../customerDetails/${id}`);
    setEnableEdit(true);
  };

  const handleWithdrwaClick = () => {
    if (customerDetail) {
      let balance = parseFloat(customerDetail.Balance);
      if (parseFloat(withdraw) < balance && parseFloat(withdraw) > 0) {
        balance -= parseFloat(withdraw);
        withdrawDepositHandler(balance, customerDetail.Account_No);
        setwithdraw(0);
      }
    }
  };

  const handleDepositClick = () => {
    if (customerDetail && parseFloat(withdraw) > 0) {
      let balance = parseFloat(customerDetail.Balance);
      balance += parseFloat(deposit);
      withdrawDepositHandler(balance, customerDetail.Account_No);
      setDeposit(0);
    }
  };

  return (
    <>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Table striped responsive>
            <tbody>
              <tr>
                <td>Account Number</td>
                <td>{customerDetail ? customerDetail.Account_No : ""}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>
                  <Form.Control
                    type="text"
                    required
                    defaultValue={customerDetail ? customerDetail.Name : ""}
                    disabled={enableEdit}
                    onChange={(e) => {
                      handleChange({ Name: e.target.value });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>User Name</td>
                <td>
                  <Form.Control
                    type="text"
                    required
                    defaultValue={customerDetail ? customerDetail.Username : ""}
                    disabled={enableEdit}
                    onChange={(e) => {
                      handleChange({ Username: e.target.value });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <Form.Control
                    type="text"
                    required
                    defaultValue={customerDetail ? customerDetail.Password : ""}
                    disabled={enableEdit}
                    onChange={(e) => {
                      handleChange({ Password: e.target.value });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <Form.Control
                    type="text"
                    required
                    defaultValue={customerDetail ? customerDetail.Email : ""}
                    disabled={enableEdit}
                    onChange={(e) => {
                      handleChange({ Email: e.target.value });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Phone No</td>
                <td>
                  <Form.Control
                    type="text"
                    required
                    defaultValue={customerDetail ? customerDetail.Phone_No : ""}
                    disabled={enableEdit}
                    onChange={(e) => {
                      handleChange({ Phone_No: e.target.value });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>Account Type</td>

                <td>
                  <Form.Select
                    required
                    defaultValue={
                      customerDetail ? customerDetail.Account_Type : ""
                    }
                    disabled={enableEdit}
                    onChange={(e) => {
                      handleChange({ Account_Type: e.target.value });
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
                </td>
              </tr>
              <tr>
                <td>Special Request</td>
                <td>
                  <Form.Select
                    required
                    defaultValue={
                      customerDetail
                        ? customerDetail.Special_Request_Permission
                        : ""
                    }
                    disabled={enableEdit}
                    onChange={(e) => {
                      handleChange({ special_request: e.target.value });
                    }}
                  >
                    <option disabled value="">
                      Choose..
                    </option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </Form.Select>
                </td>
              </tr>
              <tr>
                <td>Balance</td>
                <td colSpan={2}>
                  {customerDetail ? customerDetail.Balance : null}
                </td>
              </tr>
              <tr>
                <td>Withdraw</td>
                <td>
                  <Form.Control
                    className="mb-2"
                    type="number"
                    min="0"
                    defaultValue="0"
                    onChange={(e) => {
                      setwithdraw(e.target.value);
                    }}
                  />
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => handleWithdrwaClick()}
                  >
                    Withdraw
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Deposit</td>
                <td>
                  <Form.Control
                    className="mb-2"
                    type="number"
                    min="0"
                    defaultValue={deposit}
                    onChange={(e) => {
                      setDeposit(e.target.value);
                    }}
                  />
                  <Button
                    variant="success"
                    type="button"
                    onClick={() => handleDepositClick()}
                  >
                    Deposit
                  </Button>
                </td>
              </tr>
              {fixed.includes(
                customerDetail ? customerDetail.Customer_ID : ""
              ) ? (
                <>
                  <tr>
                    <th colSpan={2} className="text-center p-5">
                      Fixed Account Details
                    </th>
                  </tr>
                  <tr>
                    <td>Fixed Accout Number</td>
                    <td>{fixedDetail ? fixedDetail.Account_No : ""}</td>
                  </tr>
                  <tr>
                    <td>Period</td>
                    <td>{`${fixedDetail ? fixedDetail.Period : ""} years`}</td>
                  </tr>
                  <tr>
                    <td>Fixed Balace</td>
                    <td>{fixedDetail ? fixedDetail.Amount : ""}</td>
                  </tr>
                  <tr>
                    <td>Date of deposite</td>
                    <td>{fixedDetail ? fixedDetail.DateofDeposit : ""}</td>
                  </tr>
                </>
              ) : null}

              <tr className="p-5">
                {enableEdit === true ? (
                  <td colSpan={2}>
                    <Button
                      variant="danger"
                      type="button"
                      onClick={() =>
                        handleDelete(
                          customerDetail.Account_No,
                          customerDetail.Customer_ID
                        )
                      }
                    >
                      Delete
                    </Button>{" "}
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={() => {
                        navigate("../");
                      }}
                    >
                      Back
                    </Button>{" "}
                    <Button
                      variant="success"
                      type="button"
                      onClick={handleClick}
                    >
                      Edit
                    </Button>{" "}
                    {!fixed.includes(
                      customerDetail ? customerDetail.Customer_ID : ""
                    ) ? (
                      <Button
                        variant="primary"
                        type="button"
                        onClick={handleFixed}
                      >
                        Create a fixed Account
                      </Button>
                    ) : null}
                  </td>
                ) : (
                  <td colSpan={2}>
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={backEditHandler}
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
    </>
  );
}

export default CustomerDetails;
