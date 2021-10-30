import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './NavBar.css'
import logo from '../../image/travency-logo.png';

const NavBar = () => {
    // destructuring user and logout info
    const {user, logout} = useAuth();
    const [tourItem, setTourItem] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/my-tours')
        .then(res => res.json())
        .then(data => setTourItem(data))
    }, [tourItem])
    const myTour = tourItem.filter(tour => tour.email === user.email)
    console.log(myTour);
    return (
        <> 
            <Container>
                <Row className="d-flex justify-content-between align-items-center">
                        <Col md={4} className="logo text-center">
                            <img className="img-fluid" src={logo} alt="" />
                        </Col>
                        <Col md={4} className="search-bar text-center">
                            <input type="text"/>
                        </Col>
                        <Col md={4} className="extra-icon text-center">
                            <i className="far fa-heart mx-2"></i>
                            <i className="far fa-question-circle mx-2"></i>
                        </Col>
                </Row>
            </Container>
            <Navbar sticky="top" className="navBar navBg" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
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
                        <NavLink className="menu-item" to="/my-tour"><i className="fas fa-luggage-cart">{myTour.length || 0 }</i></NavLink>
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