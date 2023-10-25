import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import About from './About';
import Contact from './Contact';
import HomePage from './HomePage';

function NavbarComp() {
return (
<Router>
<div>
<Navbar bg="dark" variant = {"dark"} expand="lg" className="">
    <Container fluid>
    <Navbar.Brand href="#">Lost And Found</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
        >
        <Nav.Link as={Link} to={"/HomePage"} >Home</Nav.Link>
        <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Link} to={"/HomePage"}>Action</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/HomePage"}>
            Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to={"/HomePage"}>
            Something else here
            </NavDropdown.Item>
        </NavDropdown>
         <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
        </Nav>
        <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar.Collapse>
    </Container>
</Navbar>
</div>
<div>
<Switch>
    <Route path='/HomePage'><HomePage/></Route>
    <Route path='/About'><About/></Route>
    <Route path='/Contact' ><Contact/></Route>
</Switch>
</div>
</Router>
  );
}

export default NavbarComp;