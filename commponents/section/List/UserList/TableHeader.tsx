import styled from "styled-components";
import { GridConfig } from "./TableItem";

const TableHeaderS = styled(GridConfig)`
  border-bottom: 1px solid #ffffff;
  padding-bottom: 16px;
  margin-right: 27px;
  b {
    font-weight: 700;
    font-size: 24px;
    font-family: var(--ff-BebasN);
    line-height: 120%;
  }
`;

export const TableHeader = () => {
  return (
    <TableHeaderS>
      <b>Name</b>
      <b>Email</b>
      <b>Wallet</b>
    </TableHeaderS>
  );
};
