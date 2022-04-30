import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Googlelogin from '../Googlelogin/Googlelogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const handlereset=()=>{
        sendPasswordResetEmail(email);
        toast("Reset Password email is sending")
    }
    const location = useLocation();

    let from= location.state?.from?.pathname || "/"

    let errorelement;
    if (error) {
        errorelement = error.message;
    }
    if (loading) {
        <Spinner
            animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>;
    }
    if(user){
        navigate(from, {replace:true})
    }

    const handlelogin = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)


    }
    const newRegister = () => {
        navigate('/register')
    }
    return (
        <div className='container my-5'>
            <div className='w-25 mx-auto my-5 text-start'>
                <Form onSubmit={handlelogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
            <div>
                <p>New User? <Button className='btn btn-danger'  onClick={newRegister}>Register Now</Button></p>
                <p>Forget Password? <Button className='btn btn-danger' onClick={handlereset}> Reset Password</Button></p>
            </div>
            <p>{errorelement}</p>
            <div>
                <Googlelogin></Googlelogin>
            </div>
        </div>
    );
};

export default Login;