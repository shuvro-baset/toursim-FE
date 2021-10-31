import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <Container fluid className="mt-5 footer-bg ">
            <Row className="pt-5">
            {/* footer part 1st column */}
                <Col md={3}>
                    <div className="d-flex flex-column align-items-start p-3">
                        <h2 className="logo-text p-0 m-0 text-white mb-3"> SP <span>Travency</span> </h2>
                        <p className="quote p-0 m-0 text-white">There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them</p>
                        <div className="mt-4 d-flex justify-content-evenly align-items-center text-white">
                            <i className="social-icon fab fa-facebook"></i>
                            <i className="social-icon fab fa-google"></i>
                            <i className="social-icon fab fa-twitter"></i>
                            <i className="social-icon fab fa-youtube"></i>
                            <i className="social-icon fab fa-instagram"></i>
                    </div>
                        
                    </div>
                </Col>

            {/* footer part 2nd column */}

                <Col md={3}>
                    <div className="text-white p-3">
                        <h4 className="mb-4">Quick Links</h4>
                        <div className="line"></div>
                        <p><i className="right-arrow fas fa-chevron-right mx-2"></i>Home</p>
                        <p><i className="right-arrow fas fa-chevron-right mx-2"></i>Tours</p>
                        <p><i className="right-arrow fas fa-chevron-right mx-2"></i>Gallery</p>
                        <p><i className="right-arrow fas fa-chevron-right mx-2"></i>About</p>
                        <p><i className="right-arrow fas fa-chevron-right mx-2"></i>Privacy</p>
                        <p><i className="right-arrow fas fa-chevron-right mx-2"></i>FAQ</p>
                    </div>
                </Col>
            {/* footer part 3rd column */}

                <Col md={3}>
                    <div className="text-white p-3">
                        <h4 className="mb-4">Features</h4>
                        <p><i className="right-arrow fas fa-chevron-right mx-2"></i>Popular Destinations</p>
                        <p><i className="right-arrow fas fa-chevron-right mx-2"></i>List of Tours</p>
                        <p><i className="right-arrow fas fa-chevron-right mx-2"></i>Gallery</p>
                        <p><i className="right-arrow fas fa-chevron-right mx-2"></i>Travel on a Budget</p>
                        <p><i className="right-arrow fas fa-chevron-right mx-2"></i>Travelling with Kids</p>
                    </div>
                </Col>
            {/* footer part 4th column */}

                <Col md={3}>
                    <div className="text-white p-3 contact">
                        <h4 className="mb-4">Contact</h4> 
                        <div className="d-flex  align-items-center text-white">
                            <i className="fas fa-map-marker-alt icon-font"></i>
                            <p className="m-3"> 92, Lalbagh Road. <br />
                                                dhaka-1211
                            </p>
                        </div>
                        <div className="d-flex  align-items-center text-white">
                            <i className="fas fa-phone-alt icon-font"></i>
                            <p className="m-3"> +880-1687575757 <br />
                                                +880-1723232323
                            </p>
                        </div>
                        <div className="d-flex  align-items-center text-white">
                            <i className="fas fa-globe-americas icon-font"></i>
                            <p className="m-3"> info@sptravency.com <br />
                                                web: www.sptravencybd.com
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col className="py-2 d-flex justify-content-center copyright-text">
                    <small> Design and Developed by <span>shuvro-baset</span> </small>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;