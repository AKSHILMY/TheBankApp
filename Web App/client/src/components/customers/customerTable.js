import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Search from "./searchCustomer";

function CustomerTable({ customers }) {
  let navigate = useNavigate();
  const [filteredCustomer, setFilteredCustomer] = useState(customers);
  const rowClickHAndler = (id) => {
    navigate(`customerDetails/${id}`);
  };

  useEffect(() => {
    setFilteredCustomer(customers);
  }, [customers]);

  const searchHandler = (text) => {
    let searched = customers.filter((customer) => {
      return (
        customer.Name.toLowerCase() +
        customer.Username.toLowerCase() +
        customer.Account_No.toLowerCase() +
        customer.Email.toLowerCase() +
        customer.Account_Type.toLowerCase()
      )
        .trim()
        .includes(text.toLowerCase().trim());
    });
    console.log(searched);
    if (text !== "") {
      setFilteredCustomer(searched);
    } else {
      setFilteredCustomer(customers);
    }
  };

  return (
    <>
      <Container>
        <Search search={searchHandler} />
        <Container>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Account Number</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Agent ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomer.map((customer) => {
                return (
                  <tr
                    onClick={() => {
                      rowClickHAndler(customer.Customer_ID);
                    }}
                    key={customer.Customer_ID}
                  >
                    <td>{customer.Account_No}</td>
                    <td>{customer.Name}</td>
                    <td>{customer.Phone_No}</td>
                    <td>{customer.Agent_ID}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
}

export default CustomerTable;
