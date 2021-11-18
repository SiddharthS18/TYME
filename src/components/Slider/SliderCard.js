//Slider Card for Rendering each object

import React from "react";
import styled from "styled-components";

const ServicesCard = styled.div`
  background: #091830;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  margin: 10px 0px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #deeafc;
`;

const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #deeafc;
`;

const SliderCard = ({ item }) => {
  return (
    <ServicesCard>
      <ServicesIcon src={item.img} />
      <ServicesH2>{item.topLine}</ServicesH2>
      <ServicesP>{item.headline}</ServicesP>
    </ServicesCard>
  );
};

export default SliderCard;
