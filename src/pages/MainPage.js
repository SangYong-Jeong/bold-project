import React from 'react';
import styled, { PageWrapper } from '../style';
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import img1 from '../assets/img/1-etcPf.jpg';
import img2 from '../assets/img/2-etcPf.jpg';
import img3 from '../assets/img/3-design.jpg';
import img4 from '../assets/img/22-design.jpg';

const StyledSwiper = styled(Swiper)`
  text-align: center;
`;

const StyledImgWrap = styled.div`
  width: 700px;
  margin: auto;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;
`;

SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation]);

const MainPage = () => {
  return (
    <PageWrapper>
      <StyledSwiper
        effect="coverflow"
        grabCursor="true"
        centeredSlides="true"
        spaceBetween={0}
        slidesPerView={3}
        loop="true"
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        coverflowEffect={{
          rotate: 20,
          stretch: 25,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        // autoplay={{ delay: 1000 }}
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
    </PageWrapper>
  );
};

export default MainPage;
