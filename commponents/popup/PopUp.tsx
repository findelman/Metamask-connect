import { UserContext } from "@/context/UserProvider";
import { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "../UI-kit/Button";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  display: grid;
  z-index: 10000000;
  place-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(23, 23, 23, 0.81);
`;

const PopUpWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  background: #262628;
  max-width: 422px;
  padding: 43px 50px;
  h3 {
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    color: var(--color-orange);
    font-family: var(--ff-BebasN);
  }
  p {
    margin: 29px 0px 56px;
    color: white;
    a {
      color: var(--color-orange);
    }
  }
`;

export const PopUp = () => {
  const { showPopUp, setshowPopUp } = useContext(UserContext);

  if (typeof window !== "undefined") {
    if (showPopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  return (
    <>
      {showPopUp && (
        <Wrapper>
          <Overlay></Overlay>
          <PopUpWrapper>
            <h3>metamask extention</h3>
            <p>
              To work with our application, you have to install the
              <a target="_blank" href="https://metamask.io/download/">
                {" "}
                Metamask browser extension
              </a>
            </p>
            <Button
              onClick={() => {
                setshowPopUp(false);
              }}
              text={"Skip this step"}
            />
          </PopUpWrapper>
        </Wrapper>
      )}
    </>
  );
};
