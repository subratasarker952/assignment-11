import React, { useState } from 'react';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Register = () => {
    const navigate= useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const handleRegister = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }

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
    const loginpage =()=>{
        navigate('/login')
    }

    return (
        <div className='container my-5'>
            <div className='w-25 mx-auto my-5 text-start'>


                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                </Form>
            <p>New User? <Button onClick={loginpage}>Login</Button></p>

            </div>
            <p>{errorelement}</p>
        </div>
    );

};

export default Register;