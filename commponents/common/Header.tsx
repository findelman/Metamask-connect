import { JC_SB } from "@/styles/style-variables";
import styled from "styled-components";
import { Button } from "../UI-kit/Button";
import detectEthereumProvider from "@metamask/detect-provider";
import { useContext, useState } from "react";
import { MainSvg } from "./svg";
import Link from "next/link";
import { UserContext } from "@/context/UserProvider";

const Wrapper = styled(JC_SB)`
  padding: 14px 0;
`;

export const Header = () => {
  const { setshowPopUp, userInfo, setuserInfo } = useContext(UserContext);
  async function connectMetamask() {
    console.log(userInfo.address);
    try {
      const provider: any = await detectEthereumProvider();
      if (provider) {
        await provider.request({ method: "eth_requestAccounts" });
        const accounts = await provider.request({ method: "eth_accounts" });
        console.log(accounts);
        setuserInfo({ ...userInfo, address: accounts[0] });
      } else {
        setshowPopUp(true);
      }
    } catch (error) {
      setshowPopUp(true);
    }
  }
  return (
    <Wrapper>
      <Link href="/">
        <MainSvg />
      </Link>
      <Button
        isLogin={userInfo.address !== ""}
        onClick={connectMetamask}
        text={userInfo.address !== "" ? userInfo.address : "Connect Metamask"}
      />
    </Wrapper>
  );
};
