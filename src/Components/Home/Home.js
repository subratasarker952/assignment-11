import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import Slider from '../Slider/Slider';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const sixforHome = products.slice(0, 6)

    return (
        <div className=''>
            <Slider></Slider>
            <div className='productContainer'>
                {
                    sixforHome.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
                <Link to='/inventory' ><Button className='mx-auto my-5'>All Product</Button></Link>

            <Footer></Footer>
        </div>
    );
};

export default Home;