/*
5. Image Slider using React JS
React exercise to create an image slide, where users can view multiple images with next/previous buttons. Additionally, there is also an option to select an image from any index of the list through a click-on option circle.
The following are the steps to create an image slider in React JS:

1.Declare array of objects with id and image url.
2.For pre/next functionality, we decrement/increment count of the index of active image.
3.Update active image index with clicked option.
*/
import { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import SliderImageHandler from '../../components/SliderImageHandler/SliderImageHandler';

import './ImageSlider.css'

function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);
  const [images] = useState([
    { id: '01', url: 'https://picsum.photos/400/300' },
    { id: '02', url: 'https://picsum.photos/400/300' },
    { id: '03', url: 'https://picsum.photos/400/300' },
    { id: '04', url: 'https://picsum.photos/400/300' },
    { id: '05', url: 'https://picsum.photos/400/300' },
    { id: '06', url: 'https://picsum.photos/400/300' }
  ]);


  const decrementIndex = () => {
    if (imageIndex > 0)
      setImageIndex(imageIndex - 1);
  }

  const incrementIndex = () => {
    if (imageIndex < images.length - 1)
      setImageIndex(imageIndex + 1);
  }
  
  return (
    <div className="ImageSlider">
      <BsArrowLeftCircleFill
        size={32}
        className='slider-left-arrow'
        color='white'
        onClick={decrementIndex}
      />
      <SliderImageHandler sliderImage={images[imageIndex]}/>
      <BsArrowRightCircleFill
        size={32}
        className='slider-right-arrow'
        color='white'
        onClick={incrementIndex}
      />
    </div>
  )
}

export default ImageSlider;
