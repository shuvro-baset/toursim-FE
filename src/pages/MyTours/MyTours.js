import React from 'react';
import {useState, useEffect} from 'react'
import { Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth'
import './MyTour.css'

const MyTours = () => {
    const {user} = useAuth()
    const [tours, setTours] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/my-tours')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [tours])
    const myTours = tours.filter(tours => tours.email === user.email)


     // DELETE AN USER
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
                        const remainingTours = myTours.filter(tours => tours.email === user.email);
                        setTours(remainingTours);
                    }
                });
        }
    }
    return (
        <Container>
            <Row className="my-5">


                <Table>
                    { myTours.map(tour => 
                        <tr
                            key={ tour._id}>
                            <th className="tour-img"><img className="img-fluid" src={tour.tour.image} alt="" /></th>
                            <th>{tour.tour.name}</th>
                            <th>{tour.tour.price}</th>
                            <th>{tour.tour.duration}</th>
                            <th><button onClick={() => handleDeleteTour(tour._id)}>delete</button></th>
                        </tr>
                    
                    
                    )
                    
                    }
                </Table> 
            </Row>
        </Container>
    );
};

export default MyTours;