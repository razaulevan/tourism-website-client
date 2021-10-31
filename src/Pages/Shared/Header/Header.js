import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../contexts/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="nav-e" bg="" variant="dark " collapseOnSelect expand="lg" sticky="top">
                <Container className="">
                    <Navbar.Brand href="#home" className="fs-4">Hello Trekkers</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className="text-white " as={HashLink} to="/home#home">Home</Nav.Link>
                        {/* <Nav.Link className="text-white " as={HashLink} to="/home#about">About</Nav.Link> */}
                        <Nav.Link className="text-white " as={HashLink} to="/home#services">Places</Nav.Link>
                        <Nav.Link className="text-white " as={HashLink} to="/home#blog">Blogs</Nav.Link>
                        <Nav.Link className="text-white " as={HashLink} to="/home#accesorie">Accesories</Nav.Link>
                        {
                            user?.email ?
                                <Nav.Link className="text-white " as={Link} to="/myorder">My Orders</Nav.Link> : ''

                        }
                        {
                            user?.email ?
                                <Nav.Link className="text-white" as={Link} to="/allorder">All Orders</Nav.Link> : ''

                        }
                        {
                            user?.email ?
                                <Nav.Link className="text-white" as={Link} to="/addservice">Add Service</Nav.Link> : ''

                        }

                        {user?.email ?
                            <Button onClick={logOut} variant="danger">Logout</Button> :
                            <Nav.Link className="text-white fs-6" as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            <a style={{ textDecoration: 'none', color: "lightgray", marginLeft: "5px" }} href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;