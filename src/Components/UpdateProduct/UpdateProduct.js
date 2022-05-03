import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UseProducts from '../../Hooks/UseProducts';

const UpdateProduct = () => {
    const [products, setProducts] = UseProducts();

    const { id } = useParams();
    return (
        <div className='container mt-5'>
            <div className='w-50 mx-auto'>
                <h2>Product Name</h2>
                <h2>Product Quantity</h2>
                <br/>
                <Button className='w-25 m-1'>Delivery</Button>
                <Button className='w-25 m-1'>Add Quantity</Button>

            </div>

        </div>
    );
};

export default UpdateProduct;