import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image from '../../assets/image.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Caraousel = () => {
  return (
    <Carousel className='mt-0'>
      <Carousel.Item>
        <img src={image} text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} text="First slide" />
      </Carousel.Item>      <Carousel.Item>
        <img src={image3} text="First slide" />
      </Carousel.Item>
    </Carousel>
  )
}

export default Caraousel
