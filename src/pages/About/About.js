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

                    <button class="btn btn-booking">Book a tour</button>
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
                <h2>Why SP Travency</h2>
                <Col md={6}>
                    <img src="" alt="" />
                </Col>
                <Col md={6}>
                    <p></p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;