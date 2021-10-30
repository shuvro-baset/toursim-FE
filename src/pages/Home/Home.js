import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Banner from '../../components/Banner/Banner';
import BeautifulPlaces from '../../components/BeautifulPlaces/BeautifulPlaces';
import TopReview from '../../components/TopReview/TopReview';
import Tour from '../../components/Tour/Tour';
import TourTrip from '../../components/TourTrip/TourTrip';
import TravelFilter from '../../components/TravelFilter/TravelFilter';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    // destructuring user and isLoading info
    const { user, isLoading } = useAuth();
    const [tours, setTours] = useState([])
    

    

    useEffect(() => {
        fetch('http://localhost:5000/home')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])
    return (
        <>
            <Banner></Banner>
            <TravelFilter></TravelFilter>
            <TourTrip></TourTrip>

            <Container className="my-5">
            
            {
            isLoading && 
                // showing spinner when reload page.
                <Col className="d-flex justify-content-center align-items-center my-3" ><Spinner animation="border" variant="primary" /></Col>
            }
            <Row>
                <h1 className="text-center">Take a Tour</h1></Row>
            <Row>
            {
                tours.map(tour => 
                    <Tour
                        key={tour._id}
                        tour={tour}
                    ></Tour>
                )
            }
            </Row>
            </Container>
            <BeautifulPlaces></BeautifulPlaces>
            <TopReview></TopReview>
            
        
        </>
    );
};

export default Home;