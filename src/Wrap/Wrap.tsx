import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";

export default function Wrap() {
  const [amount, setAmount] = useState("0.0");
  const [balance, setBalance] = useState("0");
  const [selectedToken, setSelectedToken] = useState("DAI");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper>
      <MainContainer>
        <WrappingBox>
          <Amount>{amount}</Amount>
          <TokenContainer>
            <Token>token</Token>
            <BalanceContainer>
              <Balance>Balance: {balance}</Balance>
              <MaxButton>MAX</MaxButton>
            </BalanceContainer>
          </TokenContainer>
        </WrappingBox>
        <AiOutlineArrowDown className="icon" />
        <WrappingBox>
          <Amount>{amount}</Amount>
          <TokenContainer>
            <Token>{selectedToken}x</Token>
            <Balance>Balance: {balance}</Balance>
          </TokenContainer>
        </WrappingBox>
      </MainContainer>
      <Unit>1 ETH = 1 ETHx</Unit>
      <Button>Upgrade to Super Token</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const MainContainer = styled.div`
  .icon {
    border: 2px solid #fff;
    box-shadow: rgb(204 204 204 / 25%) 0px 0px 6px 3px;
    border-radius: 50%;
    font-size: 2rem;
    padding: 5px;
    color: #fff;
    font-weight: 600;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 180px;
  }
`;

const WrappingBox = styled.div`
  padding: 1rem 1.3rem;
  box-shadow: rgb(204 204 204 / 25%) 0px 0px 6px 3px;
  border: none;
  border-radius: 0.7rem;
  display: flex;
  justify-content: space-between;
`;

const Amount = styled.div`
  font-size: 1.8rem;
`;

const TokenContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Token = styled.div`
  border: 1px solid #fff;
`;

const BalanceContainer = styled.div`
  display: flex;
`;

const Balance = styled.div``;

const MaxButton = styled.button``;

const Unit = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  margin: 1.5rem 0;
`;

const Button = styled.button`
  border-radius: 0.7rem;
  border: none;
  padding: 0.7rem 1.3rem;
  background: #3a3372;
  color: #fff;
  font-size: 0.9rem;
  font-family: Poppins;
  width: 100%;
  &:hover {
    box-shadow: rgb(204 204 204 / 25%) 0px 0px 6px 3px;
    cursor: pointer;
  }
`;
