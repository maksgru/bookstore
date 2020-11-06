import React from "react";
import { Navbar, Nav, Container, Figure, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">bookSTORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
        <Nav className="float-right">
          <Link to="/profile" className="p-0">
            <Figure className="m-0">
              <Figure.Image
                className="m-0"
                width={40}
                height={40}
                alt="user "
                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png"
              />
            </Figure>
          </Link>
          <Button variant="outline-info btn-tog btn-bdnone m-0">
              <i className="fa fa-sign-out fa-2x" aria-hidden="true" />
            <span className="align-middle">
              
            Sign Out
            </span>

          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
