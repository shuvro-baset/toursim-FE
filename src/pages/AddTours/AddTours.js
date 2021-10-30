import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddTours = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        
    console.log(data);
    axios.post('http://localhost:5000/add-tours', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
}

    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>

                    <h1 className="info-head text-center"> Add a New Tour Trip</h1> 
                    <hr />
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-info">
                            <label>Tour Name</label> <br />
                            <input {...register("name", { required: true })} /> <br />
                            {errors.name && <span>This field is required</span>}
                            
                            <label>Tour Description</label> <br />
                            <textarea {...register("description")} /> <br />
                            {errors.description && <span>This field is required</span>}

                            <label>Price</label> <br />
                            <input type="number" {...register("price", { required: true })} /> <br />
                            {errors.price && <span>This field is required</span>}

                            <label>Tour Duration</label> <br />
                            <input type="number" {...register("duration", { required: true})}/> <br />
                            {errors.duration && <span>This field is required</span>}
                            
                            <label>Tour Thumbnail</label> <br />
                            <input {...register("image", { required: true })} /> <br />
                            {errors.image && <span>This field is required</span>} <br />
                            <button type="submit" className="btn btn-booking">Add a Tour</button>
                        </form>
                    </div>
                </Col>

                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <img className="img-fluid rounded my-5"src="https://images.pexels.com/photos/7235804/pexels-photo-7235804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default AddTours;