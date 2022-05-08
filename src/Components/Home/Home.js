import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Calltoaction from '../Calltoacction/Calltoaction';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://protected-garden-39140.herokuapp.com/inventory')
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
            <div className='my-3'>
                <Link to='/inventory' ><Button className='mx-auto my-5'>All Product</Button></Link>
            </div>
            <div className='my-3'>
                <Calltoaction></Calltoaction>
            </div>
            <div className='my-5 py-5'>
                <Review></Review>
            </div>
            <div className='my-3'>

            </div>
            <div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;