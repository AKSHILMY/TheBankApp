import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <>
      <Navbar bg="light" className="fixed-bottom">
        <Container>
          <Navbar.Text className="mx-auto">
            <p>Thunder Bolt &copy; All rights reserved </p>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
