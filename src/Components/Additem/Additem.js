import React from 'react';
import { toast } from 'react-toastify';

const Additem = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const name= event.target.name.value;
        const description= event.target.description.value;
        const price= parseInt(event.target.price.value);
        const quantity= parseInt(event.target.quantity.value);
        const supplierName= event.target.supplierName.value;
        const device={name, description, price, quantity, supplierName}

     fetch('http://localhost:5000/inventory',{
         method:'POST',
         headers:{
             'content-type': 'application/json'
         },
         body: JSON.stringify(device)
     })
     .then(res => res.json())
     .then(data => {
         console.log(data);
         toast(" Device added successfully")
         event.target.reset();
     })
        //  console.log(device)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='rounded w-50 p-5 mx-auto mt-5 bg-secondary'>
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
                <input className='p-2 w-100 text-center rounded-pill border-0' required type='submit' value='Add Product' />
            </form>

        </div>
    );
};

export default Additem;