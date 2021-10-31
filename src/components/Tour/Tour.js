import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tour.css'
const Tour = (props) => {

    // destructuring tour properties
    const {_id, name, description, price, duration, image} = props.tour;
    return (
        <Col md={4} className="my-3">
            <Card className="tour-div border-0">
                <img className="img-fluid rounded" src={image} alt="img not found" />
                <Card.Body>
                    <h5> <i className="fas fa-map-marker-alt"></i> {name}</h5>
                    <p>{description.slice(0,100)}</p>
                    <p><i className="fas fa-history"></i>  {duration} Days trip</p>
                    <h6>Price: &#2547; {price}</h6>
                </Card.Body>
                <Card.Footer className="border-0 bg-transparent">
                    <Link to={`/tour-book/${_id}`}><button className="btn btn-booking">Book a Tour <i className=" mx-2 fas fa-location-arrow"></i></button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Tour;