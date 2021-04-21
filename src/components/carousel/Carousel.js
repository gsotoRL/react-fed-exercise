import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'
import img1 from '../../img/blogging-guide-unsplash.jpg';
import img2 from '../../img/jimmy-conover-unsplash.jpg';
import img3 from '../../img/raisa-nastukova-unsplash.jpg';

const CustomeCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
    <div className="carouselContainer">
        <Carousel activeIndex={index} onSelect={handleSelect} animation="false">
                <Carousel.Item animation="false">
                <img
                    className="d-block w-100 h300"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption animation="false">
                    <h3>Arizona Package</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Link to="/arizona" className="btn btn-primary float-right">Read More</Link>
                </Carousel.Caption>
                
                </Carousel.Item>
                <Carousel.Item animation="false">
                <img
                    className="d-block w-100 h300"
                    src={img2}
                    alt="Second slide"
                />
        
                <Carousel.Caption animation="false">
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item animation="false">
                <img
                    className="d-block w-100 h300"
                    src={img3}
                    alt="Third slide"
                />
        
                <Carousel.Caption animation="false">
                    <h3>Third slide label</h3>
                    <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>  
      </div>
    );
    
}
 
export default CustomeCarousel;