import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import auth from '../../firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const Googlelogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorelement;
    if (error) {
        errorelement = error.message;
    }
    if (loading) {
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>;
    }
    if (user) {
        navigate('/')
    }

    return (
        <div>
            <Button onClick={() => signInWithGoogle()}> Google Login</Button>
            <p>{errorelement}</p>
        </div>
    );
};

export default Googlelogin;