import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3"
          sticky="top"
        >
          <Container fluid>
            <Navbar.Brand>
              <NavLink className="title" to="/">
                <b>Micro Banking</b>
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/">
                    <Nav.Link>Dashboard</Nav.Link>
                  </LinkContainer>
                  <NavDropdown
                    // title={<NavLink to="customers">Customers</NavLink>}
                    title="Customers"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <LinkContainer to="customers">
                      <NavDropdown.Item>All Customers</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="customers/addCustomer">
                      <NavDropdown.Item>Add Customers</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <NavDropdown
                    title="Agents"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <LinkContainer to="customers">
                      <NavDropdown.Item>All Agents</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="customers/addCustomer">
                      <NavDropdown.Item>Add Agent</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <NavDropdown
                    title="admin"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <LinkContainer to="customers">
                      <NavDropdown.Item>Log out</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
