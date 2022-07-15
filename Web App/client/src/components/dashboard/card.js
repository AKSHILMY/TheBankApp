import React from "react";
import Card from "react-bootstrap/Card";

export default function Cards({ variant, header, count }) {
  return (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      className="mb-2 dcard"
      style={{ textDecoration: "none" }}
    >
      <Card.Header style={{ textDecoration: "none" }} className="dcard">
        {header}
      </Card.Header>
      <Card.Body>
        <Card.Text
          className="dcard"
          style={{ textDecoration: "none" }}
        >{`Total active ${header} : ${count}`}</Card.Text>
      </Card.Body>
    </Card>
  );
}
