import React from "react";
import Form from "react-bootstrap/Form";
export default function searchCustomer({ search }) {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="mx-auto mb-5"
        aria-label="Search"
        onChange={(e) => {
          search(e.target.value);
        }}
      />
    </Form>
  );
}
