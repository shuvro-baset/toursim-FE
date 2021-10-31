import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Gallery.css';


const Gallery = () => {
    return (
        <Container className="my-5">

            <h1 className="my-3 text-center">Our Gallery</h1>
            <Row>
                <Col md={3} className="my-2">
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src="https://pbs.twimg.com/media/CV8zcElUYAA_F6s.jpg" alt="nature" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="my-2">
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src="https://wallpaperaccess.com/full/2630232.jpg" alt="nature" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="my-2">
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src="https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuZ2xhZGVzaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="nature" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="my-2">
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src="https://c1.wallpaperflare.com/preview/348/956/18/natural-beauty-bangladesh.jpg" alt="nature" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="my-2">
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src="https://media.istockphoto.com/photos/boat-riding-in-a-river-picture-id606217830?k=20&m=606217830&s=612x612&w=0&h=XT59JnPgDD8fXQggzT7WgE6kgQHo4D1Q6Sya-Z370Lw=" alt="nature" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="my-2">
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src="https://media.istockphoto.com/photos/bara-gumbad-at-lodi-garden-picture-id870352486?k=20&m=870352486&s=612x612&w=0&h=LHDuTCnmCBLFn_z7eVcjeyxPvePAuBxUs2oDcvJzA-Q=" alt="nature" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="my-2">
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/36/7a/50.jpg" alt="nature" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="my-2">
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src="https://avijatrik.org/wp-content/uploads/2019/06/cover22.jpg" alt="nature" />
                            </div>
                        </div>
                    </div>
                </Col>
                
                <Col md={3} className="my-2">
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI7nlcJN_QogG0U4e2uGfQEOxaprr7joPCJA&usqp=CAU" alt="nature" />
                            </div>
                        </div>
                    </div>
                </Col>
                
                <Col md={3} className="my-2">
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe6T7W8zYDEo566CQa4JVX3H8voJupooXySw&usqp=CAU" alt="nature" />
                            </div>
                        </div>
                    </div>
                </Col>
                
                <Col md={3} className="my-2">
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src="https://www.ekusheysangbad.com/media/PhotoAlbum/2020September/KHOI-20201003081734.jpg" alt="nature" />
                            </div>
                        </div>
                    </div>
                </Col>
                
                <Col md={3} className="my-2">
                    <div class="gallery-container">
                        <div class="gallery-item">
                            <div class="image">
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/0f/1f/82/mohamaya-lake-mirsarai.jpg" alt="nature" />
                            </div>
                        </div>
                    </div>
                </Col>


            </Row>
        </Container>
    );
};

export default Gallery;