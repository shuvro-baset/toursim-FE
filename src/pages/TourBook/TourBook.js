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
    console.log(tourId)
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        
    console.log(data);
    // axios.post('http://localhost:5000/add-tours', data)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('added successfully');
    //                 reset();
    //             }
    //         })
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
                        <input {...register("name", { required: true })} placeholder="Name" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <textarea {...register("description")} placeholder="Description" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="number" {...register("price", { required: true })} placeholder="Price" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="number" {...register("duration", { required: true})} placeholder="days" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input {...register("image", { required: true })} placeholder="image url" />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default TourBook;