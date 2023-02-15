import { CloseSvg } from "@/commponents/common/svg";
import { useRouter } from "next/router";
import styled from "styled-components";

export const GridConfig = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const TableItemS = styled(GridConfig)`
  padding: 16px 0px;
  margin-right: 27px;
  cursor: pointer;
  position: relative;
  align-items: center;
  border-bottom: 1px solid #ffffff;
  :first-child {
    pointer-events: none;
  }
  svg {
    transition: 300ms linear;
    visibility: hidden;
    opacity: 0;
    right: 0;
    position: absolute;
  }
  p {
    color: white;
    transition: 300ms linear;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  :hover {
    svg {
      visibility: visible;
      opacity: 1;
    }
    p {
      color: var(--color-orange);
    }
  }
`;

export const TableItem = ({ name, email, wallet, id, onCloseClick }: any) => {
  const Router = useRouter();

  const tableClick = () => {
    console.log(id);
    Router.push(`/${id}`);
  };
  const handleCloseClick = (e: any) => {
    e.stopPropagation();
    onCloseClick(id);
  };
  return (
    <TableItemS onClick={tableClick}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{`${wallet?.slice(0, 20)}...`}</p>
      <CloseSvg onClick={handleCloseClick} />
    </TableItemS>
  );
};
