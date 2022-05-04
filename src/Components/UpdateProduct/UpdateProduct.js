import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';


const UpdateProduct = () => {
    // const { id } = useParams();
    return (
        <div className='container mt-5'>
            <div className='w-50 mx-auto'>
                <h2>Product Name</h2>
                <h2>Product Quantity</h2>
                <br/>
                <Button className='w-25 m-1'>Delivery</Button>
                <Button className='w-25 m-1'>Add Quantity</Button>
                <br/>
                <br/>
                <Link to={'/inventory/additem'}> <Button className='w-50'> Add Product</Button> </Link>
            </div>

        </div>
    );
};

export default UpdateProduct;