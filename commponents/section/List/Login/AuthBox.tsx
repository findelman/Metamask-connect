import { Button } from "@/commponents/UI-kit/Button";
import { UserContext } from "@/context/UserProvider";
import { useContext, useState } from "react";
import styled from "styled-components";
import { AuthInput } from "./AuthInput";

const Form = styled.form`
  button {
    /* Компенсируем паддинг от инпутов */
    margin-top: calc(28px - 18px);
  }
`;

const Error = styled.p`
  color: red;
`;

export const AuthBox = () => {
  const { setIsLoggedIn, isLoggedIn, userInfo, setuserInfo } =
    useContext(UserContext);
  const [error, setError] = useState<null | boolean>(null);
  // Код выглядит лаконично но есть проблема, с перерендером, при изменений одного инпута происходит ререндер второго, это легко можно исправить но я оставил так :)

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    // console.log(value, name);
    setuserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };

  const formSubmit = (e: any) => {
    e.preventDefault();
    if (userInfo.address === "") {
      setError(true);
    } else {
      setIsLoggedIn(true);
      setError(false);
    }
  };

  return (
    <Form onSubmit={formSubmit}>
      <AuthInput
        labelText={"Name"}
        isLogin={isLoggedIn}
        name={"username"}
        onChange={inputChange}
        text={userInfo.username}
        placeholder="We will display your name in participation list "
      />
      <AuthInput
        labelText={"Email"}
        isLogin={isLoggedIn}
        type={"email"}
        name={"email"}
        onChange={inputChange}
        text={userInfo.email}
        placeholder="We will display your email in participation list"
      />
      {error && <Error>Необходимо сделать CONNECT METAMASK</Error>}
      <Button
        isSubmit={isLoggedIn}
        text={isLoggedIn ? "Get early access" : "List me to the table"}
      />
    </Form>
  );
};
