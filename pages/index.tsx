import type { NextPage } from "next";
import Main from "../src/components/Main";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
`;
