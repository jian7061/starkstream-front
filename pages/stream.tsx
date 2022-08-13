import type { NextPage } from "next";
import styled from "styled-components";
import GlowingContainer from "../src/Stream/GlowingContainer";

const Send: NextPage = () => {
  return (
    <Wrapper>
      <MainContainer>
        <GlowingContainer />
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
