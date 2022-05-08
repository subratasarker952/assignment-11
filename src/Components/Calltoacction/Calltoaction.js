import React from 'react';
import phone from '../../Images/phone.jpg'

const Calltoaction = () => {
    return (
        <div className='container'>
        <div className='bg-danger text-light py-5 px-2 rounded-pill'>
                <h1> Call For Order :: <span> <img className='border-rounded' src={phone} alt='phone'/></span> 01521335328  </h1>
            </div>
        </div>
    );
};

export default Calltoaction;