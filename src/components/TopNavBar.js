import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const TopNavBar = ({ title }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/2fa">2FA</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/space">Space</Nav.Link>
                    </Nav>
                    {/* <Nav className="justify-content-end">
                        <Nav.Link href="/settings">Settings</Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
}

export default TopNavBar;