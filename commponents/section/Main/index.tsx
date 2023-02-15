import styled from "styled-components";
import { JC_SB } from "@/styles/style-variables";

import { RoadMapBox } from "./RoadMapBox";
import { useCircleMove } from "./useCircleMove";

import { CircleOverlaySvg } from "./CircleOverlaySvg";
import planetImg from "@/assets/img/planet.png";

const Content = styled.div`
  color: white;
  padding: 0px 0px 65px;
  margin-top: 180px;
  > p:last-child {
    max-width: 421px;
    margin-top: 45px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  h1 {
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 120px;
    line-height: 120%;
    position: relative;
    z-index: 5;
    pointer-events: none;
  }
`;

const CircleWrapper = styled.div`
  width: 320px;
  height: 322px;
  position: absolute;
  top: 0%;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: 500ms linear;
  }
  svg {
    transition: 500ms linear;
    position: absolute;
    z-index: 1;
    circle {
      transition: 500ms linear;
    }
  }

  :hover {
    img,
    svg {
      transition: 0ms;
      circle {
        stroke: white;
      }
    }
  }
`;

const MixCircle = styled.div`
  width: 100%;
  height: 100%;
  background: #e75626;
  border-radius: 100%;
  z-index: 5;
  position: absolute;
  mix-blend-mode: darken;
`;

export const MainContainer = () => {
  const circleView = useCircleMove();

  return (
    <>
      <Content>
        <JC_SB>
          <TitleBox>
            <h1>
              Explore Your own planet<br></br> In our New metaverse
            </h1>
            <CircleWrapper ref={circleView}>
              <CircleOverlaySvg />

              <MixCircle className="moveCircle"></MixCircle>
              <img className="moveCircle" src={planetImg.src} alt="" />
            </CircleWrapper>
          </TitleBox>

          <RoadMapBox />
        </JC_SB>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Content>
    </>
  );
};
