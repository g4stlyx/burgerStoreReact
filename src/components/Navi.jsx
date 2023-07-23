import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/navi.css";
import burgerLogo from "../assets/burgerlogo.png";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <div className="navbar">
      <Navbar expand="lg" className="main">
        <Container>
          <Navbar.Brand href="#" className="navLogo">
            <img
              src={burgerLogo}
              alt="logo"
              width="130"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
            <div className="buttons navRight">
              <Nav className="navRight me-auto">
                <Link style={{fontSize:"18px"}} className="link" to="/">Home</Link>
                <Link style={{fontSize:"18px"}} className="link" to="/menu">Menu</Link>
                <Link style={{fontSize:"18px"}} className="link" to="/about">About</Link>
                <Link style={{fontSize:"18px"}} className="link" to="/contact">Contact</Link>
              </Nav>
            </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
