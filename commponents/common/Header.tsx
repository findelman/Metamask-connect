import { JC_SB } from "@/styles/style-variables";
import styled from "styled-components";
import { Button } from "../UI-kit/Button";

const Logo = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  background: #5a5a5a;
  border: 1px dashed #c7c7c7;
  padding: 12px 86px;
  color: #ffffff;
`;

const Wrapper = styled(JC_SB)`
padding: 14px 3%;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Logo>LOGO</Logo>
      <Button
        isLogin={true}
        onClick={() => {
          return;
        }}
        text={"Connect metamask"}
      />
    </Wrapper>
  );
};
