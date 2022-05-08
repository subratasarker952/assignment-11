import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Product from '../Product/Product';



const Myitem = () => {
    const [user] = useAuthState(auth);
    const userEmail = user.email;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    const userProducts = products.filter(product => product.useremail === userEmail)

    return (
        <div >
            <h2 className='mt-5'> User added product</h2>
            <div className='productContainer'>
                {
                    userProducts.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Myitem;