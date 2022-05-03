import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import Product from '../Product/Product';
import './Products.css'


const Products = (props) => {
    const [products, setProducts] = UseProducts();
    return (
        <div>
            <h2 className='mt-5'>Inventory</h2>
        <div className='productContainer'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default Products;