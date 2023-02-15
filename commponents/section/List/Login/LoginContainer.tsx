import styled from "styled-components";
import { AuthBox } from "./AuthBox";

const Wrapper = styled.div`
  color: white;
  max-width: 421px;
  h2 {
 
    color: var(--color-orange);
  }
  p {
    margin: 18px 0px 36px;
    font-family: "Avenir-Next-Cyr-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
  }
`;

export const LoginContainer = () => {
  return (
    <Wrapper>
      <h2>Beta test registration</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </p>
      <AuthBox />
    </Wrapper>
  );
};
