import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

const FitnessImage = ({ fitnessImage }) => {
  const createCarousel = fitnessImage.map((i) => 
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"
      src={i}
      alt="First slide"
    />
  </Carousel.Item>
  )
    return (
      <div>
      <p style={{paddingTop: 50}}>Press the left and right sides of images to navigate your workout.</p>
    <Carousel fade className='carousel'>
      {createCarousel}
  </Carousel>
      </div>
    )
}

export default FitnessImage;