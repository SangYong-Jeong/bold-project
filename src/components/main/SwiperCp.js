import React from 'react';
import styled from '../../style';
import SwiperCore, { Autoplay, Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import img1 from '../../assets/img/22-design.jpg';
import img2 from '../../assets/img/23-design.jpg';
import img3 from '../../assets/img/24-design.jpg';
import img4 from '../../assets/img/27-design.jpg';

const StyledSwiper = styled(Swiper)`
  text-align: center;
`;

const StyledImgWrap = styled.div`
  width: 100%;
  margin: auto;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

SwiperCore.use([Autoplay, Navigation, EffectFade]);

const SwiperCp = () => {
  return (
    <StyledSwiper
      spaceBetween={0}
      slidesPerView={1}
      loop="true"
      navigation
      effect="fade"
      // autoplay={{ delay: 2500 }}
    >
      <SwiperSlide>
        <StyledImgWrap img={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <StyledImgWrap img={img2} />
      </SwiperSlide>
      <SwiperSlide>
        <StyledImgWrap img={img3} />
      </SwiperSlide>
      <SwiperSlide>
        <StyledImgWrap img={img4} />
      </SwiperSlide>
    </StyledSwiper>
  );
};

export default SwiperCp;
