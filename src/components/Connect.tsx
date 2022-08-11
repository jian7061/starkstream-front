import { useConnectors } from "@starknet-react/core";
import styled from "styled-components";
import Account from "../components/common/Account";
import { Button } from "../components/common/Button";
type ConnectProps = { account: string | undefined };

export default function Connect({ account }: ConnectProps) {
  const { available, connect, disconnect } = useConnectors();

  return (
    <Wrapper>
      {account ? (
        <AccountContainer>
          <Account />
          <Disconnect>
            <Button onClick={() => disconnect()}>Disconnect</Button>
          </Disconnect>
        </AccountContainer>
      ) : (
        <Button onClick={() => connect(available[0])}>Connect Wallet</Button>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
`;

const AccountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Disconnect = styled.div`
  margin-left: 0.8rem;
  &:hover {
    cursor: pointer;
  }
`;
