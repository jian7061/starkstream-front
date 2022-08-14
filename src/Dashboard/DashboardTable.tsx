import styled from "styled-components";
import Modal from "react-modal";
import { useRouter } from "next/router";
Modal.setAppElement("#__next");
import { useState } from "react";
import TokenTable, { TokenData } from "./TokenTable";

const data: TokenData[] = [
  {
    asset: "A",
    balance: {
      startTime: Date.now(),
      flowrate: 0.001,
      staticBalance: 10
    },
    netFlow: 10,
    inflow: "done",
    image: "",
  },
  {
    asset: "B",
    balance: {
      startTime: Date.now(),
      flowrate: 0.001,
      staticBalance: 10
    },
    netFlow: -19,
    inflow: "done",
    image: "",
  },
  {
    asset: "C",
    balance: {
      startTime: Date.now(),
      flowrate: 0.001,
      staticBalance: 10
    },
    netFlow: 72,
    inflow: "done",
    image: "",
  },
];

export default function DashboardTable() {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      padding: "1rem",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(168, 180, 202, 0.75)",
    },
  };
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

const Button = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

const TableContainer = styled.div``;
