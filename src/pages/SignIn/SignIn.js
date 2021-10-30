import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignIn.css'
const SignIn = () => {
    // destructuring data from custom hooks.
    const {  setIsLoading, error, message, setUser, handleGoogleSignIn,  setMessage,setError } = useAuth()
    // use location state 
    const location = useLocation();
    const history = useHistory();
    // set redirect url
    const redirect_uri = location.state?.from || '/home';


    // google sign in functionality
    const googleLogin = (e) => {
        e.preventDefault();
        handleGoogleSignIn()
        .then(result => {
            setUser(result.user);
            history.push(redirect_uri)
              })
              .catch(error => {
                setError(error.message);
                setMessage("")
              })
              .finally(() => setIsLoading(false));
    }
    return (
        <Container>
            <Row className="my-5">

                <Col className={6}>
                    <img className="img-fluid rounded" src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80" alt="" />
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
                
                    <h1 className="login-text">Login</h1>
                    <p>
                    Login to access your trip from any device
                    </p>
                    <small>By continuing, you agree to SP Travency's Terms of Use and Privacy policy</small> 
                    <div className="d-flex justify-content-evenly my-4">
                        <button onClick={googleLogin} className="btn btn-login">Google SignIn</button>
                    </div>
                    {
                        error && 
                        <Alert variant="danger">
                            <Alert.Heading>{error}</Alert.Heading>
                            
                        </Alert>
                    }
                    {   message &&
                        <Alert variant="success">
                            <Alert.Heading>{message}</Alert.Heading>
                        </Alert>
                    }
              
                </Col>
            </Row>
            
        </Container>
    );
};

export default SignIn;