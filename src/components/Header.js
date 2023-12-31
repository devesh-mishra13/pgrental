import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link className='no-shine' to={'/'}>PG RENTAL</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="me-auto">
              {/*<Nav.Link href="#features">About</Nav.Link>
              <NavDropdown title="Socials" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Github</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Instagram
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Twitter</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  WhatsApp
                </NavDropdown.Item>
    </NavDropdown>*/}
            </Nav> 
            <Nav>
            <Nav.Link eventKey={2}><Link className='no-shine mr-auto' to={'/login'}>Login</Link></Nav.Link>
              <Nav.Link eventKey={2}><Link className='no-shine' to={'/signup'}>Signup</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Header;