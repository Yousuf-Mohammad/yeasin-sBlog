import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousal.css'
import image from '../../assets/images/h6-rev-slide2.png'
import image2 from '../../assets/images/h6-rev-slide1.png'

const Carousal = () => {
    return (
        <div>
            <Carousel fade className='caro '>
                <Carousel.Item>
                    <img className='images' src={image} alt="" />
                    <Carousel.Caption className='caption'>
                        <h3>Explore the world</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='images' src={image2} alt="" />
                    <Carousel.Caption className='caption'>
                        <h3>Step Out</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>
        </div>
    );
}

export default Carousal;
