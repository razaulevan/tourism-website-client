import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../HeaderImg/boy.jpg';
import banner2 from '../../../HeaderImg/saj.jpg';
import banner3 from '../../../HeaderImg/cox.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto caro"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 > </h3>
                        <p className="text-black"></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto caro"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-black"> </h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto caro"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-black"> </h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;