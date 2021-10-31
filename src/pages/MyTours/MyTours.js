import React from 'react';
import {useState, useEffect} from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth'
import './MyTour.css'

const MyTours = () => {
    const {user} = useAuth()
    const [tours, setTours] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/my-tours')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])
    const myTours = tours.filter(tours => tours.email === user.email)
    console.log("myTours page: ", tours);

     // DELETE AN booking tour
     const handleDeleteTour = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/my-tours/${id}`;
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
                <h2>Your Email address is - <span className="username">{user.email}</span> </h2>

            </Row>
            <Row className="my-5 bg-dark text-white py-2 rounded">
                <Col md={2} className="text-center">
                    <h6>Thumbnail</h6>
                </Col>
                <Col md={2} className="text-center">
                    <h6>Title</h6>
                </Col>
                <Col md={2} className="text-center">
                    <h6>Price</h6>
                </Col>
                <Col md={2} className="text-center">
                    <h6>Duration</h6>
                </Col>
                <Col md={2} className="text-center">
                    <h6>Status</h6>
                </Col>
                <Col md={2} className="text-center">
                    
                </Col>
            </Row>
            
            {
                myTours.map(tour => 
                    <Row className="my-5"
                        key={tour._id}>
                        <Col md={2} className="text-center">
                            <img className="img-fluid rounded" src={tour.tour.image} alt="" />
                        </Col>
                        <Col md={2} className="text-center">
                            <h4>{tour.tour.name}</h4>
                        </Col>
                        <Col md={2} className="text-center">
                            <p>{tour.tour.price}</p>
                        </Col>
                        <Col md={2} className="text-center">
                            <p>{tour.tour.duration}</p>
                        </Col>
                        <Col md={2} className="text-center">
                            <p>{tour.status}</p>
                        </Col>
                        <Col md={2} className="text-center">
                            <button className="btn btn-danger" onClick={() => handleDeleteTour(tour._id)}>delete</button>
                        </Col>
                    </Row>
                )
            }
        </Container>
    );
};

export default MyTours;