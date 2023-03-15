import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../img/icon.png'

export const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container className = "nav-container">
        <Navbar.Brand href="#home">
          <img src={icon}/>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="engSfedu/"><p>Units</p></Nav.Link>
            <Nav.Link href="engSfedu/about"><p>About</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}