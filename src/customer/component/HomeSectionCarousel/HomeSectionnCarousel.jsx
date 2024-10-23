import React, { useState, useRef } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';

const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Reference to AliceCarousel

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const totalItems = data.length;
  const visibleItems = 5; // Match with responsive settings

  // Control the carousel slide movement using AliceCarousel's `slideTo`
  const slideNext = () => {
    const newIndex = Math.min(activeIndex + 1, totalItems - visibleItems);
    setActiveIndex(newIndex);
    carouselRef.current.slideTo(newIndex); // Slide to the next index
  };

  const slidePrev = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);
    carouselRef.current.slideTo(newIndex); // Slide to the previous index
  };

  // Generate items with unique keys
  const items = data.map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  return (
    <div className="border-black">
      <h2 className="text-2x1 font-extrabold text-gray-800 py-5 ">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} // Attach the ref to control the carousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={({ item }) => setActiveIndex(item)} // Sync index on manual slide
        />

        {/* Next Button */}
        {activeIndex < totalItems - visibleItems && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0rem',
              transform: 'translateX(50%) rotate(-90deg)',
              bgcolor: 'white',
            }}
            color='white'
            aria-label="next"
          >
            <KeyboardArrowRightIcon sx={{ transform: 'rotate(90deg)' }} />
          </Button>
        )}

        {/* Previous Button */}
        {activeIndex > 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '0rem',
              transform: 'translateX(-50%) rotate(90deg)',
              bgcolor: 'white',
            }}
            color='white'
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)' }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
