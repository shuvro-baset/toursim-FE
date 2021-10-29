import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tour.css'
const Tour = (props) => {
    const {_id, name, description, price, days, image} = props.tour;
    return (
        <Col md={4}>
            <div className="tour-div">
                <img className="img-fluid" src={image} alt="img not found" />
                <h3>{name}</h3>
                <p>{description.slice(0,100)}</p>
                <p>{days} days</p>
                <h6>price: {price}</h6>
                <Link to={`/tour-book/${_id}`}><button>add booking</button></Link>
            </div>
        </Col>
    );
};

export default Tour;