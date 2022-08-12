import { useStarknet } from "@starknet-react/core";
import styled from "styled-components";
import React from "react";
import Header from "./Header";

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  const { account } = useStarknet();

  return (
    <Wrapper>
      <Header account={account} />
      <Main>{children}</Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  color: #979595;
  background: linear-gradient(
    66.46deg,
    #03001e 24.27%,
    rgba(16, 0, 156, 0.758) 80.29%
  ); ;
`;

const Main = styled.div`
  height: 100vh;
`;
