import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const ManageAllTours = () => {
    const {user} = useAuth()
    const [tours, setTours] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/manage-all-tours')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [tours])


    // DELETE AN booking tour
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
                        const remainingTours = tours.filter(user => tours._id !== id);
                        setTours(remainingTours);
                    }
                });
        }
    }
    // const handleStatus = id => {
    //     const uri = `http://localhost:5000/update-status/${id}`;
        
    // }
    return (
        <Container>
            <Row className="my-5">


                <Table>

                    <tr>
                        <th>SL No.</th>
                        <th>UserName</th>
                        <th>User Address</th>
                        <th>Mobile No</th>
                        <th>Thumbnail</th>
                        <th>Tour Name</th>
                        <th>Tour Date</th>
                        <th>Tour duration</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                    </tr>

                    { tours.map((tour, index) => 
                        <tr
                            key={ tour._id}>
                            <th> {index+1} </th>
                            <th>{tour.userName}</th>
                            <th>{tour.address}</th>
                            <th>{tour.mobile}</th>
                            <th className="tour-img"><img className="img-fluid" src={tour.tour.image} alt="" /></th>
                            <th>{tour.tour.name}</th>
                            <th>{tour.date}</th>
                            <th>{tour.tour.duration} days</th>
                            <th>{tour.tour.price}</th>
                            <th>{tour.tour.status}</th>
                            <th><button onClick={() => handleDeleteTour(tour._id)}>delete</button></th>
                            {/* <th><button onClick={() => handleStatus(tour._id)}>delete</button></th> */}

                        </tr>                    
                    )
                    
                    }
                </Table> 
            </Row>
        </Container>
    );
};

export default ManageAllTours;