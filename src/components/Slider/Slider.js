//Slider for portraying "Services" Section

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SliderCard from "./SliderCard";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { sliderObjects } from "./SliderData";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import styled from "styled-components";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const Container = styled.div`
  margin: auto;
  margin-top: 35px;
  padding: 0 20px 0 20px;
  width: 95%;
`;

const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
`;

const Slider = () => {
  return (
    <Container>
      <ServicesH1>Our Services</ServicesH1>
      {/* SwiperJS Initialization and property specification */}
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
      >
        {/* Each Object is Slider Card which will get rendered */}
        {sliderObjects.map((item) => (
          <SwiperSlide>
            <SliderCard item={item} />
          </SwiperSlide>
        ))}
        ;
      </Swiper>
    </Container>
  );
};

export default Slider;
