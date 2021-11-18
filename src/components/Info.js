//Information Card for displaying characteristics

import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
const InfoContainer = styled.div`
  color: #fff;
  background: ${({ bgColor }) => bgColor};
  width: 95%;
  margin: auto;
  margin-top: 35px;
  border-radius: 20px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;
const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 400px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

const TopLine = styled.p`
  color: #01bf71;
  font-weight: bold;
  font-size: 25px;
  line-height: 16px;
  font-weight: 700px;
  letter-spacing: 1.4px;
  text_transform: uppercase;
  margin-bottom: 16px;
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ headingColor }) => headingColor};
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ SubtitleColor }) => SubtitleColor};
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

const VideoContainer = styled.video`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
const ImgContainer = styled.img`
  width: 90%;
  height: 90%;
  margin-left: 10px;
  border-radius: 20px;
  -o-object-fit: cover;
  object-fit: cover;
`;
const Info = (props) => {
  return (
    <>
      <InfoContainer bgColor={props.bgColor} id={props.id}>
        <InfoWrapper>
          <InfoRow imgStart={props.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{props.topLine}</TopLine>
                <Heading headingColor={props.headingColor}>
                  {props.Headline}
                </Heading>
                <Subtitle SubtitleColor={props.SubtitleColor}>
                  {props.description}
                </Subtitle>
                <BtnWrap>
                  <Button color="primary" variant="contained">
                    {props.button}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                {props.showVideo ? (
                  <VideoContainer
                    autoPlay
                    loop
                    muted
                    src={props.video}
                    type="video/mp4"
                  />
                ) : (
                  <ImgContainer
                    autoPlay
                    loop
                    muted
                    src={props.img}
                    type="video/mp4"
                  />
                )}
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
