import { Header } from "@/commponents/common/Header";
import Head from "next/head";
import styled from "styled-components";

import planetImg from "../assets/img/planet.png";

const Wrapper = styled.div`
  font-size: 40px;
  background: #171719;
  height: 100vh;
`;

const Content = styled.div`
  color: white;
  padding: 0px 3%;
`;
const TitleBox = styled.div`
  h1 {
    font-family: "Bebas Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 120px;
    line-height: 120%;
    position: relative;
    z-index: 5;
  }
`;

const ImgWrapper = styled.div`
  width: 320px;
  height: 322px;
  position: absolute;
  top: 0%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const MixCircle = styled.div`
  width: 100%;
  height: 100%;
  background: #E75626;
  border-radius: 100%;
  z-index: 5;
  position: absolute;
  mix-blend-mode: darken;
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper>
        <Header />
        <Content>
          <TitleBox>
            <h1>
              Explore Your own planet<br></br> In our New metaverse
            </h1>
            <ImgWrapper>
              <MixCircle></MixCircle>
              <img src={planetImg.src} alt="" />
            </ImgWrapper>
          </TitleBox>
        </Content>
      </Wrapper>
    </>
  );
}
