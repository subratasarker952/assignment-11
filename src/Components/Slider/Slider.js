import React from 'react';
import { Carousel } from 'react-bootstrap';
import a from '../../Images/a.jpg'
import b from '../../Images/b.jpg'
import c from '../../Images/c.jpg'


const Slider = () => {
    return (
        <div  >
            <Carousel style={{ height: "600px", overflow: "hidden" }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={a}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;