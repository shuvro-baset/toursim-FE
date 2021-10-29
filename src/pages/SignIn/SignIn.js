import React from 'react';
import { Alert } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

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
        <div>
            <div className="d-flex justify-content-evenly my-4">
                <button onClick={googleLogin} className="btn"><i className="social-icon fab fa-google">Google SignIn</i></button>
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
        </div>
    );
};

export default SignIn;