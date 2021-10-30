import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <Container fluid>
            <Row>
                <div className='banner-div d-flex flex-column justify-content-center align-items-center'>
                    <h2 className="my-3">Enjoy Vacation With <span className='brand-name'>SP-Travency</span> </h2>
                    <p className="my-3">Travel to the any corner of Bangladesh,Know your country first.</p>
                    <button className="btn btn-travel">Book A Tour</button>
                </div>
            </Row>
        </Container>
    );
};
export default Banner;