import styled from "styled-components";
import { Table } from "./Table";

const Wrapper = styled.div`
  color: white;
`;

export const UserListContainer = () => {
  return (
    <Wrapper>
      <h2>Participation listing (enable only for participants)</h2>
      <Table/>
    </Wrapper>
  );
};
