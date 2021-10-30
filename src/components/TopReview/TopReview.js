import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopReview.css'
const TopReview = () => {
    return (
        <Container className="my-5">
            <Row>
                <h1 className="top-review text-center">Top Reviews</h1>
                <Col md={4} className="my-3">
                    <div className="d-flex flex-column justify-content-center align-items-center py-4 shadow review rounded">
                        <i class="fas fa-user user-icon"></i>
                        <h6 className="mt-3">Md Faisal Ahmed</h6>
                        <p className="text-center p-4 ">One of the greatest place to spend your leisure time in Bangladesh when visiting Cox's Bazar. It's just 20 to 30 minutes speedboat visit from Cox's bazar 6 No. Fisheries Ghat. I would suggest to take a reserve boat from Ghat to Sonadia Island. Enjoy the calm natural beauty, the sea, the long white or grey sandy beach, bigger waves then take a walk to main island Moheskhali to enjoy the rest beauty of this great island- The Canals, Mangrove, Fishing Boat, Fishering, Calm road and blue sky over head.</p>
                        <div className="star-icon">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="my-3">
                    <div className="d-flex flex-column justify-content-center align-items-center py-4 shadow review rounded">
                        <i class="fas fa-user user-icon"></i>
                        <h6 className="mt-3">Md Dewan Ovi</h6>
                        <p className="text-center p-4 ">One of the popular tourist destination in Bangladesh. It is a must visit place. You will be simply mesmerized by the splendid beauty of the clouds valley of this unique destination...Fantastic location. But the authority is completely ignoring the environmental pollution issues. Water bottle, plastic packets are everywhere thrown by tourists that is destroying the beauty and environment. The authority should ban and type of plastic packets, non re usable water bottle there so these should be restricted completely.</p>
                        <div className="star-icon">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="my-3">
                    <div className="d-flex flex-column justify-content-center align-items-center py-4 shadow review rounded">
                        <i class="fas fa-user user-icon"></i>
                        <h6 className="mt-3">Shuvro baset</h6>
                        <p className="text-center p-4 ">Guliakhali sea beach is one of the lesser known beaches of Bangladesh. It is also known as Muradpur beach to the local people. The beach is full of greenery, which makes it special. Its environment is like the Swamp Forest and the mangrove forest. The green carpet of wide grass across the beach has made it bigger than other beaches. The narrow groove has been pierced through the middle of the green. The streams are full of water during tide. The unique position of birds, waves and wind mates is seen on this beach.</p>
                        <div className="star-icon">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TopReview;