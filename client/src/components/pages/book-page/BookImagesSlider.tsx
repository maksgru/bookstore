import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function BookImagesSlider({ images }: {images:string[]}) {

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    const slides = images.map((image: string, idx: number) => {
      return (
      <SwiperSlide key={image+idx} tag="li">
        <img
          src={image}
          style={{ listStyle: 'none', width: '300px', height: '500px' }}
          alt={`Slide ${idx+1}`}
        />
      </SwiperSlide>
      );
    }
    );

  const thumbs = images.map((image: string, idx: number) => (
      <SwiperSlide key={`thumb-${idx}`} tag="li" style={{ listStyle: 'none' }}>
        <img
          style={{ width: '100px', height: '150px' }}
          src={image}
          alt={`Thumbnail ${idx+1}`}
        ></img>
      </SwiperSlide>
  )
    );

  return (
    <React.Fragment>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
      >
        {slides}
      </Swiper>
 
      <Swiper
        id="thumbs"
        spaceBetween={5}
        slidesPerView={3}
        onSwiper={setThumbsSwiper}
      >
        {thumbs}
      </Swiper>
    </React.Fragment>
  );
}

export default BookImagesSlider;