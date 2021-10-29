import axios from 'axios';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
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
        <Container>
            <Row className="my-5">
                    <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true })} placeholder="Name" />
                        {errors.name && <span>This field is required</span>}
                        
                        <textarea {...register("description")} placeholder="Description" />
                        {errors.description && <span>This field is required</span>}
                        <input type="number" {...register("price", { required: true })} placeholder="Price" />
                        {errors.price && <span>This field is required</span>}
                        <input type="number" {...register("duration", { required: true})} placeholder="days" />
                        {errors.duration && <span>This field is required</span>}
                        <input {...register("image", { required: true })} placeholder="image url" />
                        {errors.image && <span>This field is required</span>}
                        <input type="submit" />
                    </form>
                    </div>
            </Row>
        </Container>
    );
};

export default AddTours;