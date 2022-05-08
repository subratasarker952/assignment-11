import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Additem = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = event => {
        event.preventDefault();
        const useremail = user.email;
        const picture = event.target.picture.value;
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = parseInt(event.target.price.value);
        const quantity = parseInt(event.target.quantity.value);
        const supplierName = event.target.supplierName.value;
        const device = { useremail, picture, name, description, price, quantity, supplierName }

        fetch('http://localhost:5000/inventory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(device)
        })
            .then(res => res.json())
            .then(data => {
                toast(" Device added successfully")
                event.target.reset();
            })

    }
    return (
        <div className='container'>
            <div style={{maxWidth:'500px', margin:'auto'}} >
                <form onSubmit={handleSubmit} className='rounded  p-5 mx-auto mt-5 bg-secondary'>
                    <input className='p-2 w-100 text-center rounded-pill border-0' required type='text' placeholder='Product Image url' name='picture' />
                    <br />
                    <br />
                    <input className='p-2 w-100 text-center rounded-pill border-0' required type='text' placeholder='Product Name' name='name' />
                    <br />
                    <br />
                    <input className='p-2 w-100 text-center rounded-pill border-0' required type='text' placeholder='Description' name='description' />
                    <br />
                    <br />
                    <input className='p-2 w-100 text-center rounded-pill border-0' required type='text' placeholder='Price' name='price' />
                    <br />
                    <br />
                    <input className='p-2 w-100 text-center rounded-pill border-0' required type='text' placeholder='Quantity' name='quantity' />
                    <br />
                    <br />
                    <input className='p-2 w-100 text-center rounded-pill border-0' required type='text' placeholder='Supplier Name' name='supplierName' />
                    <br />
                    <br />
                    <input className='p-2 w-50 text-center rounded-pill border-0 btn btn-primary' required type='submit' value='Add Product' />
                </form>
            </div>

        </div>
    );
};

export default Additem;