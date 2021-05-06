import React from 'react';
import img from '../../images/fire.png';
import img2 from '../../images/ice.jpg';
import img3 from '../../images/landing-bg.png'
import Carousel from 'react-bootstrap/Carousel';

const FitnessImage = () => {
    return (
<Carousel fade className='carousel'>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
        <h3>Fire Image</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Ice Image</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src={img3}
      alt="{img#}"
    />

    <Carousel.Caption>
      <h3>Test Image</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default FitnessImage;