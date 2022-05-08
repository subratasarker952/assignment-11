import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

// import { Link } from 'react-router-dom';


const Product = ({ product }) => {
    const [user] = useAuthState(auth)

    const { _id, picture, name, description, price, quantity, supplierName } = product;

    const handleDelete = id => {
        if (user) {
            const proced = window.confirm('Are you sure to Delete this item??')
            if (proced) {
                const url = `http://localhost:5000/inventory/${id}`;
                fetch(url, {
                    method: 'DELETE',
                })
            }
        }
        else{
            alert("Please Login")
        }
    }

    return (
        <div className='border p-3 m-3 rounded'>
            <img style={{ height: "250px" }} src={picture} className='img-fluid' alt='product imgage' />
            <h4>Name: {name}</h4>
            <h4>Type: {description}</h4>
            <h4>Price: {price} taka</h4>
            <h4>Quantity: {quantity} pc </h4>
            <h4>SupplierName: {supplierName}</h4>
            <Link to={`/update/${_id}`} > <button className='btn btn-primary m-2' > Update</button></Link>
            <Button onClick={() => handleDelete(_id)} className='m-2 '>Delete</Button>

        </div>
    );
};

export default Product;

// const url=`http://localhost:5000/inventory/${id}`
// fetch(url)
// .then(res=> res.json())
// .then(data => console.log(data))