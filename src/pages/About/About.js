import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';


const About = () => {
    return (
        <Container fluid>
            <Row>
                <div className="about-banner d-flex flex-column justify-content-center align-items-center text-center">
                    <h1>About SP Travency</h1>
                    <h3>We love to travel Bangladesh first and want you <br /> to have the trip of a lifetime!</h3>

                    <button className="btn btn-booking">Book a tour</button>
                </div>
            </Row>
            <Row className="my-5">
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                <h1>About Us</h1>
                <p>SP Travency enables users to quickly and easily explore a destination’s offerings and create personalized sightseeing 
                    itineraries by utilizing local expertise and cutting-edge artificial intelligence. Drawing from a database of over 80,000 
                    destinations SP Travency makes trip planning easy, intuitive and enjoyable for over 25 million travelers a year. <br />
                    SP Travency For Partners enables trip planning within any innovative travel website. SP Travency for Partners is now 
                    available for NTOs, corporate partners, travel agencies, airlines and destination marketing organizations of all shapes 
                    and sizes.</p>
                </div>
            </Row>
            <Row>
                <h2 className="text-center">Why SP Travency</h2>
                <Col md={6} className="my-3">
                    <img className="img-fluid rounded" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </Col>
                <Col md={6} className="my-3 d-flex flex-column justify-content-center align-items-center">
                    <h3>Research bot that works for you</h3>

                    <p>We match your travel preferences with <br />
                        over 2500 data points:
                    </p>
                    <ul>
                            <li>Best places & time to visit</li>
                            <li>Reviews</li>
                            <li>Transportation options</li>
                            <li>Hidden gems</li>
                        </ul>
                    
                    <h3>Your complete plan in one place </h3>
                        <ul>
                            <li>Book & organize your reservations</li>
                            <li>Share and collaborate with co-travelers</li>
                            <li>Enjoy your trip!</li>
                        </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default About;