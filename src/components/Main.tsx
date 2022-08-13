import styled from "styled-components";
import Modal from "react-modal";
import { useRouter } from "next/router";
Modal.setAppElement("#__next");
import { useState } from "react";
import TokenTable, { TokenData } from "./TokenTable";

const data: TokenData[] = [
  {
    asset: "A",
    balance: "someDemo",
    netFlow: "ERC721",
    inflow: "done",
    image: "",
  },
  {
    asset: "B",
    balance: "someDemo",
    netFlow: "ERC721",
    inflow: "done",
    image: "",
  },
  {
    asset: "C",
    balance: "someDemo",
    netFlow: "ERC721",
    inflow: "done",
    image: "",
  },
];

export default function Main() {
  return (
    <Wrapper>
      <MainContainer>
        <TableContainer>
          <TokenTable data={data} />
        </TableContainer>
      </MainContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const TableContainer = styled.div``;
