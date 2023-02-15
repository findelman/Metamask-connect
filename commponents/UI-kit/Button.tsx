import styled from "styled-components";

const ButtonS = styled.button<{
  isLogin?: boolean | string;
  isSubmit?: boolean;
}>`
  background: ${({ isLogin }) => (!isLogin ? "#e75626" : "transparent")};
  border-radius: 30px;
  padding: 10px 24px;
  font-family: "Bebas Neue";
  font-size: 18px;
  line-height: 120%;
  cursor: pointer;
  transition: 200ms linear;
  text-transform: uppercase;
  color: ${({ isLogin }) => (!isLogin ? "#ffffff" : "#e75626")};
  :hover {
    background: ${({ isLogin }) => !isLogin && '#be3b10'};
  }
  ${({ isSubmit }) => isSubmit && "pointer-events: none; opacity: 0.5"}
`;

interface IButton {
  text: string | boolean;
  onClick?: () => void;
  isLogin?: boolean;
  isSubmit?: boolean;
}

export const Button: React.FC<IButton> = ({
  text,
  onClick,
  isLogin,
  isSubmit,
}) => {
  return (
    <ButtonS isSubmit={isSubmit} isLogin={isLogin} onClick={onClick}>
      {text}
    </ButtonS>
  );
};
