import type { NextPage } from "next";
import styled from "styled-components";
import GlowingContainer, { ITxData } from "../src/Stream/GlowingContainer";

const Send: NextPage = () => {
  // test data
  const updateData: ITxData = {
    receiver: "0x999",
    token: "USDC",
    flowrate: 0.666,
    endsOn: 0,
  }
  return (
    <Wrapper>
      <MainContainer>
        <GlowingContainer mode="Send" txData={null}/>

        <GlowingContainer mode="Update" txData={updateData} />
      </MainContainer>
    </Wrapper>
  );
};

export default Send;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

const MainContainer = styled.div``;
