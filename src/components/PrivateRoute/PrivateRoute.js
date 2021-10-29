import React from 'react';
import { Col, Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    // destructuring user and isLoading info
    const { user, isLoading } = useAuth();

    if (isLoading) {
        // showing spinner when reload page.
        return <Col className="d-flex justify-content-center align-items-center my-3" ><Spinner animation="border" variant="primary" /></Col>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ?
                children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
        >
        </Route>
    );
};

export default PrivateRoute;