import React, { useState } from "react";
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

  const searchHandler = (text) => {
    let searched = customers.filter((customer) => {
      return (
        customer.firstName.toLowerCase() +
        customer.lastName.toLowerCase() +
        customer.bank.cardNumber.toLowerCase() +
        customer.phone.toLowerCase() +
        customer.maidenName.toLowerCase()
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
    <Container>
      <Search search={searchHandler} />
      <Container>
        <Table responsive hover>
          <thead>
            <tr>
              <th>Account Number</th>
              <th>Full Name</th>
              <th>Phone</th>
              {/* <th>Agent</th> */}
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => {
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
                  {/* <td>{customer.maidenName}</td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}

export default CustomerTable;
