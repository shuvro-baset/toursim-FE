import React from 'react';
import {useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth'
import './MyTour.css'

const MyTours = () => {

    // user data from useAuth
    const {user} = useAuth()
    // set state for tours
    const [tours, setTours] = useState([])

    // getting  tour data
    useEffect(() => {
        fetch('https://sheltered-lake-01404.herokuapp.com/my-tours')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])
    // filtering my tour data
    const myTours = tours.filter(tours => tours.email === user.email)

     // DELETE  booking tour
     const handleDeleteTour = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://sheltered-lake-01404.herokuapp.com/my-tours/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingTours = myTours.filter(tours => tours._id !== id);
                        setTours(remainingTours);
                    }
                });
        }
    }
    return (
        <Container className="my-5">

            <Row>
                <h2>Welcome to SP Travency, <span className="username">{user.displayName}</span> </h2>
                <h2>Your Email address is - <small className="username">{user.email}</small> </h2>

            </Row>
            
            {/* showing tour data */}
            
            {
                myTours.map(tour => 
                    <Row className="my-5"
                        key={tour._id}>
                        <Col md={2} className="text-center">
                            <img className="img-fluid rounded" src={tour.tour.image} alt="" />
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <h4>{tour.tour.name}</h4>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <p>{tour.tour.price}</p>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <p>{tour.tour.duration} Days trip</p>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <p>{tour.status}</p>
                        </Col>
                        <Col md={2} className="text-center d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-danger" onClick={() => handleDeleteTour(tour._id)}>delete</button>
                        </Col>
                    </Row>
                )
            }
        </Container>
    );
};

export default MyTours;