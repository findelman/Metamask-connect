import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";
import { useScrollPagination } from "./useScrollPagination";

const Wrapper = styled.div`
  margin-top: 35px;
`;

const TableList = styled.div`
  max-height: 509px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
    box-shadow: inset 0 0 30px 30px white;
    border: solid 3.5px transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e75626;
    border-radius: 12px;
  }
`;

export const Table = () => {
  const { tableList, items, mutate,handleItemCloseClick } = useScrollPagination();

  return (
    <Wrapper>
      <TableHeader />
      <TableList ref={tableList}>
        {items?.map(
          (item: {
            id: string;
            address: string;
            email: string;
            username: string;
          }) => {
            return (
              <TableItem
                onCloseClick={handleItemCloseClick}
                mutate={mutate}
                id={item.id}
                key={item.id}
                wallet={item.address}
                email={item.email}
                name={item.username}
              />
            );
          }
        )}
      </TableList>
    </Wrapper>
  );
};
