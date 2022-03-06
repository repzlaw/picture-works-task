import React from 'react';
import ReactDOM from 'react-dom';
import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import '../Assets/Style.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar bg="light" className='navbar' expand="lg">
            <Container>
                <Link className='link' to="/">
                    <Navbar.Brand className='head-color'>Pictureworks </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="me-auto float-end">
                    <Nav className="me-auto">
                        <Link className='link' to="/tasks/create">
                            <Nav.Item className='head-color'>Add Task</Nav.Item>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
}

export default Header;

