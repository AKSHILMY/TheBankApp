import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Search from "./searchCustomer";

function FixedAccouts({ fixedAccoutDetails }) {
  const [filteredCustomer, setFilteredCustomer] = useState(fixedAccoutDetails);

  useEffect(() => {
    setFilteredCustomer(fixedAccoutDetails);
  }, [fixedAccoutDetails]);

  const searchHandler = (text) => {
    let searched = fixedAccoutDetails.filter((customer) => {
      return (
        customer.Name.toLowerCase() +
        customer.Account_No.toString().toLowerCase()
      )
        .trim()
        .includes(text.toLowerCase().trim());
    });
    console.log(searched);
    if (text !== "") {
      setFilteredCustomer(searched);
    } else {
      setFilteredCustomer(fixedAccoutDetails);
    }
  };

  return (
    <Container>
      <Search search={searchHandler} />
      <Table responsive>
        <thead>
          <tr>
            <th>Fixed Account Number</th>
            <th>Name</th>
            <th>Period</th>
            <th>Amount</th>
            <th>Date of Deposit</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomer.map((c) => {
            return (
              <tr key={c.Customer_ID}>
                <td>{c.Account_No}</td>
                <td>{c.Name}</td>
                <td>{c.Period}</td>
                <td>{c.Amount}</td>
                <td>{c.DateofDeposit.slice(0, 10)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default FixedAccouts;
