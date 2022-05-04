import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const UpdateProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const { picture, name, description, price, quantity, supplierName } = product;
    const handleAdd = event => {
        event.preventDefault();
        const addquantity=parseInt(event.target.addquantity.value);
        
    }
    
    const handleDelivary = event => {
        event.preventDefault();
        const delivaryquantity=parseInt(event.target.delivaryquantity.value);
       
    }
    return (
        <div className='container mt-5 w-lg-50' >
            <div className='border p-3 m-3 rounded'>
                <img style={{ height: "200px" }} src={picture} className='img-fluid' alt='product imgage' />
                <h4>Name: {name}</h4>
                <h4>Type: {description}</h4>
                <h4>Price: {price} taka</h4>
                <h4>Quantity: {quantity} pc </h4>
                <h4>SupplierName: {supplierName}</h4>
            </div>
            <div className='d-flex mb-2'>
                <form onSubmit={handleDelivary} className='w-50'>
                    <input type='text' name='delivaryquantity' placeholder='Delivar Quantity' className=" text-center p-2 m-2"  required/>
                    <br />
                    <input type='submit' value='Delivery' className='w-50 btn btn-primary'  />
                </form>
                <form onSubmit={handleAdd} className='w-50'>
                    <input type='text' name='addquantity' placeholder='Add Quantity' className=" text-center p-2 m-2"  required/>
                    <br />
                    <input type='submit' value='Add Quantity' className='w-50 btn btn-primary'  />
                </form>
            </div>
            <Link to='/inventory/additem'> <Button className='w-25'> Add New Product</Button> </Link>

        </div>
    );
};

export default UpdateProduct;