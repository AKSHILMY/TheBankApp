import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AgentDetails({ agents, deleteAgent }) {
  let navigate = useNavigate();
  let { id } = useParams();
  const [enableEdit, setEnableEdit] = useState(true);
  const [validated, setValidated] = useState(false);
  const [agentDetail, setAgentDetail] = useState(
    agents.filter((c) => c.Agent_ID === parseInt(id))
  );

  useEffect(() => {
    setAgentDetail(agents.filter((c) => c.Agent_ID === parseInt(id)));
  }, [agents]);

  const handleChange = (val) => {
    console.log(val);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // setEnableEdit(true);
      // updateCustomer(customerDetail);
      // navigate("../");
      console.log("Submitted");
    }
    setValidated(true);
  };

  const handleDelete = (Agent_ID) => {
    navigate("../");
    deleteAgent(Agent_ID);
  };

  const backEditHandler = () => {
    navigate(`../agentDetails/${id}`);
    setEnableEdit(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setEnableEdit(false);
  };

  return (
    <Container>
      {/* {console.log(agentDetail)} */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Table striped responsive>
          <tbody>
            <tr>
              <td>Agent ID</td>
              <td>{agentDetail[0] ? agentDetail[0].Agent_ID : ""}</td>
            </tr>
            <tr>
              <td>Agent Name</td>
              <td>
                <Form.Control
                  type="text"
                  required
                  defaultValue={agentDetail[0] ? agentDetail[0].Agent_Name : ""}
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
                  defaultValue={agentDetail[0] ? agentDetail[0].Username : ""}
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
                  defaultValue={agentDetail[0] ? agentDetail[0].Password : ""}
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
                  defaultValue={agentDetail[0] ? agentDetail[0].Email : ""}
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
                  defaultValue={agentDetail[0] ? agentDetail[0].Phone_NO : ""}
                  disabled={enableEdit}
                  onChange={(e) => {
                    handleChange({ Phone_NO: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>NIC</td>
              <td>
                <Form.Control
                  type="text"
                  placeholder="NIC"
                  defaultValue={agentDetail[0] ? agentDetail[0].NIC : ""}
                  required
                  disabled={enableEdit}
                  onChange={(e) => {
                    handleChange({ NIC: e.target.value });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide the NIC.
                </Form.Control.Feedback>
              </td>
            </tr>

            <tr>
              <td>DOB</td>
              <td>
                <Form.Control
                  type="date"
                  placeholder="DOB"
                  disabled={enableEdit}
                  defaultValue={
                    agentDetail[0]
                      ? new Date(agentDetail[0].DOB)
                          .toISOString()
                          .substring(0, 10)
                      : ""
                  }
                  required
                  onChange={(e) => {
                    handleChange({ DOB: e.target.value });
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide the Date of Birth.
                </Form.Control.Feedback>
              </td>
            </tr>
            <tr>
              <td>Assigned customers</td>
              <td>
                {agentDetail[0]
                  ? agentDetail.length > 1
                    ? agentDetail.map((c) => {
                        return c.Name + ", ";
                      })
                    : agentDetail[0].Name
                  : ""}
              </td>
            </tr>
            <tr className="p-5">
              {enableEdit === true ? (
                <td colSpan={2}>
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => handleDelete(agentDetail[0].Agent_ID)}
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
                  {/* <Button variant="success" type="button" onClick={handleClick}>
                    Edit
                  </Button>{" "} */}
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
  );
}
