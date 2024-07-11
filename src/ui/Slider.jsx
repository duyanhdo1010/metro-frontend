// import Swiper core and required modules
import { EffectFade, Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import all Swiper styles
import 'swiper/swiper-bundle.css';

import styled from 'styled-components';

const StyledImage = styled.img`
  height: 60rem;
  width: 100%;
  object-fit: cover;
`;

const SliderContainer = styled(Swiper)`
  height: 60rem;
  flex: 2;
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color-teal-3);
  }
  .swiper-pagination-bullet {
    background-color: var(--color-teal-0);
  }

  .swiper-pagination-bullet-active {
    background-color: var(--color-teal-3);
  }
`;

function Slider({ slides }) {
  return (
    <SliderContainer
      modules={[EffectFade, Autoplay, Navigation, Pagination, A11y]}
      effect={'fade'}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      rewind={true}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      {slides.map((slide) => (
        <SwiperSlide key={slide}>
          <StyledImage src={slide.image} alt={slide.title} />
        </SwiperSlide>
      ))}
    </SliderContainer>
  );
}

export default Slider;
