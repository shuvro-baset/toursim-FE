import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Tour from '../../components/Tour/Tour';

const Home = () => {
    const [tours, setTours] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/home')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])
    return (
        <>

            <Container>
            <Row><h3>home</h3></Row>
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
            
            
        
        </>
    );
};

export default Home;