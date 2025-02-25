import React from 'react';
import { mainCarouselData } from './MainCarosel';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const MainCarousel = () => {

    const items = mainCarouselData.map((item)=><img className='cursor-pointer -z-20' role='presentation'  src={item.image} alt=''/>)

return (
    <AliceCarousel
   
    items={items}
   disableButtonsControls
   autoPlay
   autoPlayInterval={1000}
  infinite
/>
)

}
export default MainCarousel;