import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../images/slider0.png'
import image2 from '../../images/slider1.png'
import image3 from '../../images/slider2.png'
import Products from '../../Sheard/Products/Products';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
            <Carousel>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={image1}
                 alt="First slide"
               />
               <Carousel.Caption>
                 <h3>Special Hadphone Limited Edition</h3>
                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={image2}
                 alt="Second slide"
               />

               <Carousel.Caption>
                 <h3>Smart Watch</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src={image3}
                 alt="Third slide"
               />

               <Carousel.Caption>
                 <h3>Evergreen Best Camera</h3>
                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
             </Carousel.Item>
            </Carousel>
            </div>
            <h2 className='text-center mt-5'>Our Products</h2>
            <Products></Products>
        </div>
    );
};

export default Home;