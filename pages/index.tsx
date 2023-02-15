import Head from "next/head";

import { MainContainer } from "@/commponents/section/Main";
import styled from "styled-components";
import { ListContainer } from "@/commponents/section/List";
import { Header } from "@/commponents/common/Header";
import { PopUp } from "@/commponents/popup/PopUp";

const Wrapper = styled.div`
  background: #171719;
  /* padding: 0px 3%; */
`;

const Container = styled.div`
  max-width: 1312px;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>New metaverse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper>
        <Container>
          {" "}
          <PopUp />
          <Header />
          <MainContainer />
          <ListContainer />
        </Container>
      </Wrapper>
    </>
  );
}
