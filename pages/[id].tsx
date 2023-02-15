import { Header } from "@/commponents/common/Header";
import { AuthInput } from "@/commponents/section/List/Login/AuthInput";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  background: #171719;
  color: white;
  padding: 0px 3%;
  h1 {
    font-weight: 700;
    margin: 96px 0px 48px;
    font-size: 48px;
    line-height: 120%;
    font-family: var(--ff-BebasN);
  }
`;

export default function InfoPage() {
  const [userData, setuserData] = useState<any>();
  const Router = useRouter();
  useEffect(() => {
    if (typeof Router.query.id !== "undefined") {
      fetch(`https://new-backend.unistory.app/api/data/id/${Router.query.id}`)
        .then((resp) => resp.json())
        .then((result) => {
          console.log(result);
          setuserData(result);
        });
    }
  }, [Router]);

  return (
    <Wrapper>
      <Header />
      <h1>PERSONAL DATA</h1>
      <AuthInput text={userData?.username} isLogin={true} labelText={"Name"} />
      <AuthInput text={userData?.email} isLogin={true} labelText={"Email"} />
      <AuthInput text={userData?.address} isLogin={true} labelText={"Wallet"} />
    </Wrapper>
  );
}
