import React from 'react';
import { Carousel } from 'react-bootstrap';
import r1 from '../../Images/r1.png'
import sk from '../../Images/sk.jpg'
import r3 from '../../Images/r3.jpg'

const Review = () => {
    return (
        <div  >
            <Carousel style={{ height: "250px", overflow: "hidden" }}>
                <Carousel.Item>
                    <h1> Nice inventory management website</h1>
                <h1 className='mb-3' > Help ful website</h1>

                    <img
                        style={{ height: "100px", width: '100px' }}
                        className="rounded-circle"
                        src={r1}
                        alt="First slide"
                    />
                       <h2>Name: Komarjan</h2>
                    <h3> Diller</h3>
                </Carousel.Item>
                <Carousel.Item>
                    <h1> Nice inventory management website</h1>
                <h1 className='mb-3'>  Support system is good</h1>

                    <img
                        style={{ height: "100px", width: '100px' }}
                        className=" rounded-circle"
                        src={sk}
                        alt="Second slide"
                    />
                       <h2>Name: Noyan</h2>
                    <h3> Customar</h3>
                </Carousel.Item>
                <Carousel.Item>
                    <h1> Nice inventory management website</h1>
                    <h1 className='mb-3'> Nice inventory management website</h1>

                    <img
                        style={{ height: "100px", width: '150px' }}
                        className=" rounded-circle"
                        src={r3}
                        alt="Third slide"
                    />
                    <h2>Name: Devil</h2>
                    <h3> Diller</h3>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Review;