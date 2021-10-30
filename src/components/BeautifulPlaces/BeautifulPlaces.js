import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './BeautifulPlaces.css'
const BeautifulPlaces = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                <h1>Explore the most beautiful places in the world</h1>
                <p>Whether you're exploring your own city or an unfamiliar destination in any of the four corners of the globe our list of 
                    the best places to explore will ignite a fire of curiosity inspiration and motivation in your belly.
                </p>
                <button className="btn btn-explore">Explore</button>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={4}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="img-fluid rounded" src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80" alt="" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column justify-content-center align-items-center p-2">
                        <img className="img-fluid my-2 rounded" src="https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <img className="img-fluid my-2 rounded" src="https://images.unsplash.com/photo-1547710272-f0cd2545f838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="img-fluid rounded"src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BeautifulPlaces;