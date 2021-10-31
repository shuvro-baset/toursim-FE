import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

const ManageAllTours = () => {

    // set state for tours data
    const [tours, setTours] = useState([]);

    // getting all tours data
    useEffect(() => {
        fetch('http://localhost:5000/manage-all-tours')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])

    console.log("manage all tour: ", tours);

    // DELETE  booking tour
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

        const uri = `http://localhost:5000/update-status/${id}`;
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
                    fetch('http://localhost:5000/manage-all-tours')
                        .then(res => res.json())
                        .then(data => setTours(data))
                }
                
            })
        
    }
    return (
        <Container>
            <Row className="my-5">
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Mobile</th>
                        <th>Thumbnail</th>
                        <th>Tour Title</th>
                        <th> Date</th>
                        <th> duration</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>

                    {/* mapping all tour data  */}
                    
                    { tours.map((tour, index) => 
                        <tr
                            key={ tour._id}>
                            <td>{tour.address}</td>
                            <td>{tour.mobile}</td>
                            <td>{tour.userName}</td>
                            <td className="tour-img"><img className="img-fluid" src={tour.tour.image} alt="" /></td>
                            <td>{tour.tour.name}</td>
                            <td>{tour.date}</td>
                            <td>{tour.tour.duration} days</td>
                            <td>{tour.tour.price}</td>
                            <td><button onClick={() => handleDeleteTour(tour._id)}>delete</button></td>
                            <td><button onClick={() => handleStatus(tour._id)}>{tour.status === "Approved" ? "Approved" : tour.status}</button></td>

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