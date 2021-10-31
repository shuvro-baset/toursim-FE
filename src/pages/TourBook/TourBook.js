import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth'
import './TourBook.css'


const TourBook = () => {

    // user data
    const {user} = useAuth();
    // getting tour id 
    const {tourId} = useParams();
    // set state for tour
    const [tour, setTour] = useState([])

    // use location state 
    const location = useLocation();
    const history = useHistory();
    // set redirect url
    const redirect_uri = location.state?.from || '/my-tours';


    // form data
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    // getting single tour info
    useEffect(() => {
        const uri = `https://sheltered-lake-01404.herokuapp.com/tour-book/${tourId}`
        fetch(uri)
        .then(res => res.json())
        .then(data => setTour(data))
    }, [tourId])

    
    const onSubmit = data => {
        data.userName = user.displayName;
        data.email = user.email;
        data.tour = tour;
        data.status = 'pending';
    // booking tour
    axios.post(`https://sheltered-lake-01404.herokuapp.com/tour-book`, data)
            .then(response => {
                console.log("book tour: ", response);
                if (response.data.acknowledged) {
                    alert('added successfully');
                    reset();
                    history.push(redirect_uri);
                }
            })
            
}

    
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <h1 className="text-center my-3 info-head">Tour Information</h1>
                    <img className="img-fluid rounded" src={tour.image} alt="" />
                    <h3 className="my-3">{tour.name}</h3>
                    <p>{tour.description}</p>
                    <p><i className="fas fa-history"></i> {tour.duration} Days trip</p>
                    <p>Price: &#2547;{tour.price}</p>
                </Col>
                <Col md={6}>
                    <h1 className="text-center my-3 info-head">Tour Booking Information</h1>
                    
                    <div className="ms-5">
                        <h4 className="mb-3 order-head">User Information</h4>
                        <hr />
                        <p>User Name: {user.displayName}</p>
                        <p>User Email: {user.email}</p>

                    </div>
                    <div className="ms-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="form-info">
                            <h4 className="mb-3 order-head">Billing Information</h4>   
                                <hr />                     
                                <label>Address</label> <br />
                                <input  {...register("address", { required: true })}/> <br />
                                {errors.address && <span>This field is required</span>}

                                <label>Phone Number</label> <br />
                                <input type="number" {...register("mobile", { required: true, minLength:6, maxLength:11})}/> <br />
                                {errors.mobile && <span>This field is required</span>}

                                <label>Date</label> <br />
                                <input type="date" {...register("date", { required: true})} /> <br />
                                {errors.date && <span>This field is required</span>}

                                <label>Message</label> <br />
                                <textarea {...register("message")} rows="3" /> <br />
                                {errors.message && <span>This field is required</span>}

                                <button type="submit" className="btn btn-booking">Book a Tour</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TourBook;