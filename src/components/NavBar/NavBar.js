import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './NavBar.css'
const NavBar = () => {
    // destructuring user and logout info
    const {user, logout} = useAuth();

    return (
        <> 
            <Container>
                <Row>
                    <h3>SP Travency</h3>
                </Row>
            </Container>
            <Navbar sticky="top" className="navBar navBg" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className="menu-item" to="/home">Home</Link>

                        <Link className="menu-item" to="/my-tours">My Tours</Link> 
                        <Link className="menu-item" to="/manage-all-tours">Manage Tours</Link>
                        { user?.email &&
                        <Link className="menu-item" to="/add-tours">Add Tours</Link>}
                        <Link className="menu-item" to="/about">About</Link>
                    </Nav>

                    <Nav className="mr-auto">
                    {/* showing logout login button and user name  */}
                        { !user?.email && 
                            <NavLink className="menu-item" to="/login"> <i className="fas fa-sign-in-alt"></i> Login</NavLink>
                        }
                        { user?.email &&
                            <small className="menu-item"><i className="fas fa-user"></i> {user.displayName || user.name} </small>
                        }
                        { user?.email &&
                            <NavLink className="menu-item" onClick={logout} to="/home"><i className="fas fa-sign-out-alt"></i> LogOut</NavLink>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>   
        
    );
};

export default NavBar;