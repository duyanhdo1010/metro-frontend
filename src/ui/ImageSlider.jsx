import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';

const StyledSlider = styled(Slider)`
  position: relative;
`;

const StyledImage = styled.img`
  max-height: 56rem;
  width: 100%;
  object-fit: cover;
  object-position: 50% bottom;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); // Điều chỉnh độ trong suốt tại đây
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding-left: 3.2rem;
  color: white; // Màu chữ
  font-size: 2.8rem; // Kích thước chữ
  max-height: 56rem;
  gap: 1.6rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 1.2rem;
  &:link,
  &:visited {
    color: var(--color-teal-0);
    border: 1px solid var(--color-teal-0);
    padding: 1.6rem 2.4rem;
    border-radius: 1000px;
    cursor: pointer;
  }
  &:hover,
  &:active {
    box-shadow: rgba(72, 135, 202, 0.8) 0 0 1.5rem 1.5rem;
  }
`;

function ImageSlider() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true
  };
  return (
    <StyledSlider {...settings}>
      {[1, 2, 3].map((num) => (
        <div key={num}>
          <StyledImage src={`/slider-0${num}.jpg`} alt="Image" />
          <Overlay>
            <h1>Chào mừng đến với Summit</h1>
            <p>Đánh thức mọi giác quan với các chuyến du lịch của Summit</p>
            <StyledNavLink to="/tours">
              <span>Khám phá</span>
              <PiArrowRight />
            </StyledNavLink>
          </Overlay>
        </div>
      ))}
    </StyledSlider>
  );
}

export default ImageSlider;
