import { UserContext } from "@/context/UserProvider";
import { useContext } from "react";
import styled from "styled-components";
import { LoginContainer } from "./Login/LoginContainer";
import { UserListContainer } from "./UserList/UserListContainer";

const Wrapper = styled.div`
  display: grid;
  padding: 48px 0px;

  grid-template-columns: 1fr 1.2fr;
`;

export const ListContainer = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Wrapper>

      <LoginContainer />
      {isLoggedIn && <UserListContainer />}
    </Wrapper>
  );
};
