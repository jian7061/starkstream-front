import styled from "styled-components";
import { useState } from "react";
import Wrap from "./Wrap";
import Unwrap from "./Unwrap";
import Link from "next/link";

export default function WrapContainer() {
  const [action, setAction] = useState("send");

  const selectedStyle = {
    color: "red",
    border: "1px solid blue",
  };

  const unselectedStyle = {};

  const renderLogic = () => {
    if (action === "wrap") {
      return <Wrap />;
    } else if (action === "unwrap") {
      return <Unwrap />;
    } else if (action === "select") {
      return (
        // <CoinSelector
        //   setAction={setAction}
        //   selectedToken={selectedToken}
        //   setSelectedToken={setSelectedToken}
        //   sanityTokens={sanityTokens}
        //   twTokens={twTokens}
        //   walletAddress={walletAddress}
        // />
        <div>select</div>
      );
    }
  };
  return (
    <Wrapper>
      <Selector>
        <Link
          href={{
            pathname: "/wrap",
            query: { name: "ungrade" },
          }}
        >
          <Option
            style={action === "wrap" ? selectedStyle : unselectedStyle}
            onClick={() => setAction("wrap")}
          >
            <p>Wrap</p>
          </Option>
        </Link>
        <Option
          style={action === "unwrap" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("unwrap")}
        >
          <p>Unwrap</p>
        </Option>
      </Selector>
      <ModalMain>{renderLogic()}</ModalMain>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
  height: 450px;
  background-color: #391E5A;
  border-radius: 20px;
  box-shadow: rgb(204 204 204 / 55%) 0px 0px 6px 3px;
  border: 2px solid #80b8c2;
  padding: 28px;
`;

const Selector = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.div`
  &:hover {
    cursor: pointer;
    background-color: #604876;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
