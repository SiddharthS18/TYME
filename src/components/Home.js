//Contains and renders all other components

import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero";
import Info from "./Info";
import Footer from "./Footer";
import Slider from "./Slider/Slider";
import { homeObj1, homeObj2, homeObj3 } from "./InfoData";

const Container = styled.div`
  height: 10%;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(58, 58, 156, 1) 59%,
    rgba(3, 162, 194, 1) 100%
  );
`;

const Home = () => {
  return (
    <Container>
      <NavBar />
      <Hero />
      <Info {...homeObj1} />
      <Slider />
      <Info {...homeObj3} />
      <Info {...homeObj2} />
      <Footer />
    </Container>
  );
};

export default Home;
