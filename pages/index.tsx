import Head from "next/head";

import { MainContainer } from "@/commponents/section/Main";
import styled from "styled-components";
import { ListContainer } from "@/commponents/section/List";
import { Header } from "@/commponents/common/Header";
import { PopUp } from "@/commponents/popup/PopUp";

const Wrapper = styled.div`
  background: #171719;
  padding: 0px 3%;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>New metaverse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper>
        <PopUp />
        <Header />
        <MainContainer />
        <ListContainer />
      </Wrapper>
    </>
  );
}
