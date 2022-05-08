import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Product from '../Product/Product';



const Myitem = () => {
    const [user] = useAuthState(auth);
    const userEmail = user.email;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://protected-garden-39140.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    const userProducts = products.filter(product => product.useremail === userEmail)

    return (
        <div >
        <h2 className='mt-5'> User added product = {userProducts.length}</h2>
            <div className='productContainer'>
                {
                    userProducts.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Myitem;