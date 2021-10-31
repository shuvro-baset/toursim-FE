import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import './ManageAllTours.css'

const ManageAllTours = () => {

    // set state for tours data
    const [tours, setTours] = useState([]);

    // getting all tours data
    useEffect(() => {
        fetch('https://sheltered-lake-01404.herokuapp.com/manage-all-tours')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])

    console.log("manage all tour: ", tours);

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
                    const remainingTours = tours.filter(tour => tour._id !== id);
                    setTours(remainingTours);
                }
            });
        }
    }

    // update status
    const handleStatus = id => {
        console.log("I am hitting");
        const updateStatus = {
                status: 'approved'
        }

        const uri = `https://sheltered-lake-01404.herokuapp.com/update-status/${id}`;
        fetch(uri, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
        .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    fetch('https://sheltered-lake-01404.herokuapp.com/manage-all-tours')
                        .then(res => res.json())
                        .then(data => setTours(data))
                }
                
            })
        
    }
    return (
        <Container>
            <Row className="my-5">
                <h2 className="text-center"> All Booking Tour List</h2>
            </Row>
            <Row className="my-2">
                <Table responsive>
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>Thumbnail</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Mobile</th>
                            <th>Tour Title</th>
                            <th> Date</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                    {/* mapping all tour data  */}
                    
                    { tours.map(tour => 
                        <tr
                            key={ tour._id}>
                            <td><img className="img-fluid rounded tour-img w-100" src={tour.tour.image} alt="" /></td>
                            <td>{tour.userName}</td>
                            <td>{tour.address}</td>
                            <td>{tour.mobile}</td>
                            <td>{tour.tour.name}</td>
                            <td>{tour.date}</td>
                            <td>{tour.tour.price}</td>
                            <td><button className="btn btn-danger" onClick={() => handleDeleteTour(tour._id)}>delete</button></td>
                            <td><button className="btn btn-warning" onClick={() => handleStatus(tour._id)}>{tour.status === "Approved" ? "Approved" : tour.status}</button></td>

                        </tr>                    
                    )
                    
                    }
                    </tbody>
                    
                </Table> 
            </Row>
        </Container>
    );
};

export default ManageAllTours;