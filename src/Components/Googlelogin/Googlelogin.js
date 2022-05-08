import React from 'react';
import { Button } from 'react-bootstrap';
import auth from '../../firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';


const Googlelogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorelement;
    if (error) {
        errorelement = error.message;
    }
    if (loading) {
        return <Loading></Loading>
    }

    let from= location.state?.from?.pathname || "/"
    if (user) {
        navigate(from, {replace:true})
    }


    return (
        <div>
            <Button onClick={() => signInWithGoogle()}> Google Login</Button>
            <p>{errorelement}</p>
        </div>
    );
};

export default Googlelogin;