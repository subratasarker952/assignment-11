import React from 'react';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
          <Products></Products>
          <Footer></Footer>
        </div>
    );
};

export default Home;