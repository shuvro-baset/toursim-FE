import initializeAuthentication from './../firebase/firebase.initialize'
import {getAuth, GoogleAuthProvider,signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';
// initialize firebase authentication.
initializeAuthentication()
const auth = getAuth();
// auth provider object for google
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true)
  
      // Google signIn handler function.
    const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
    }
      
    // logout functionality
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
            setError("");
            setMessage("");
        })
        .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
      }, [])

    return {
            user, error, message,isLoading, setUser, setError, setMessage, setIsLoading, handleGoogleSignIn, logout
    }
    
  };
    
    

export default useFirebase;