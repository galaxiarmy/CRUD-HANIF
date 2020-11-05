import React, { useState } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink } from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor: "#e6ac83"}} light expand="md">
        <Container>
        <NavbarBrand href="/">Hanif Mobile</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">About Us</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>Admin</NavbarText>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
