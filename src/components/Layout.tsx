import { useStarknet } from "@starknet-react/core";
import styled from "styled-components";
import React from "react";
import SideBar from "./Sidebar";

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  const { account } = useStarknet();

  return (
    <Wrapper>
      <SideBar account={account} />
      <main>{children}</main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  color: #979595;
`;
