import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './TourTrip.css'
const TourTrip = () => {
    return (
        <Container fluid className="my-5">
            <Row>
                <div className="parallax">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 text-white">
                        <h1>Are You  Interested To Tour?</h1>
                        <p>We Offer A Wide Range Of Procedures To Help You Get The Perfect Smile</p>
                        <button className="btn btn-travel">Book A Tour</button>
                    </div>
                </div>
                
            </Row>
        </Container>
    );
};

export default TourTrip;