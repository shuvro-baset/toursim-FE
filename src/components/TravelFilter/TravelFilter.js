import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TravelFilter.css'
const TravelFilter = () => {
    return (
        <Container className="my-4">
            <Row>
                <h1 className="my-2 filter-text"> Explore Your Travel</h1>
                <p>Discover your next great adventure, become an explorer to get started!</p>
            </Row>
            <Row className="filter-div my-2">
                <Col md={3} className="my-4 ">
                    <label className="text-white">Where to go</label> <br />
                    <input type="text" />
                </Col>
                <Col md={3} className="my-4 ">
                    <label className="text-white">When? </label> <br />
                    <input type="date" />
                </Col>
                <Col md={3} className="my-4">
                    <label className="text-white">Tour type</label> <br />
                    <select className="w-75">
                        <option disabled>Tour Type</option>
                        <option value="">Adventure</option>
                        <option value="">City</option>
                        <option value="">Hiking</option>
                        <option value="">Tracking</option>
                        <option value="">Forest</option>
                        <option value="">Group</option>
                    </select>
                </Col>
                <Col md={3} className="my-4 d-flex justify-content-center align-items-center">
                    <button className="btn btn-travel">search now</button>
                </Col>
            </Row>
        </Container>
    );
};

export default TravelFilter;