import React from "react";
import Cards from "./card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function Dashboard({ count }) {
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/customers">
            <Cards
              variant="Primary"
              header="Accounts"
              count={count.customers}
            />
          </Link>
        </Col>
        <Col>
          <Link to="/agents">
            <Cards variant="Success" header="Agents" count={count.agents} />
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
