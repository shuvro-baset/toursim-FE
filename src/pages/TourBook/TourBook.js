import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth'
const TourBook = () => {
    const {user} = useAuth();
    const {tourId} = useParams();
    const [tour, setTour] = useState([])
    console.log(user.displayName)
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        data.userName = user.displayName;
        data.email = user.email;
        data.tour = tour;
        data.tour.status = 'pending'
    console.log(data);
    axios.post(`http://localhost:5000/tour-book/${tourId}`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
}

    useEffect(() => {
        const uri = `http://localhost:5000/tour-book/${tourId}`
        fetch(uri)
        .then(res => res.json())
        .then(data => setTour(data))
    }, [tourId])
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <h2>Tour Description</h2>
                    <img className="img-fluid" src={tour.image} alt="" />
                    <h3>{tour.name}</h3>
                    <p>{tour.description}</p>
                    <p>{tour.days} days</p>
                    <p>{tour.price}</p>
                </Col>
                <Col md={6}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <h5>Billing Information</h5>
                        
                        
                        <input  {...register("address", { required: true })} placeholder="address" />
                        {errors.address && <span>This field is required</span>}

                        <input type="number" {...register("mobile", { required: true, minLength:11})} placeholder="mobile" />
                        {errors.mobile && <span>This field is required</span>}

                        <input type="date" {...register("date", { required: true})} placeholder="mobile" />
                        {errors.date && <span>This field is required</span>}

                        <textarea {...register("message")} placeholder="send a message" />
                        {errors.message && <span>This field is required</span>}


                       

                        <input type="submit" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default TourBook;