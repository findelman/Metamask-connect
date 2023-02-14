import styled from "styled-components";

const ButtonS = styled.div<{ isLogin?: boolean }>`
  background: ${({ isLogin }) => (isLogin ? "#e75626" : "transparent")};
  border-radius: 30px;
  padding: 10px 24px;
  font-family: "Bebas Neue";
  font-size: 18px;
  line-height: 120%;
  text-transform: uppercase;
  color: ${({ isLogin }) => (isLogin ? "#ffffff" : "#e75626")};
`;

interface IButton {
  text: string;
  isLogin: boolean;
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({ text, onClick, isLogin }) => {
  return (
    <ButtonS isLogin={isLogin} onClick={onClick}>
      {text}
    </ButtonS>
  );
};
