import type { NextPage } from "next";
import styled from "styled-components";

const Send: NextPage = () => {
  return (
    <Wrapper>
      <MainContainer>Stream</MainContainer>
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
