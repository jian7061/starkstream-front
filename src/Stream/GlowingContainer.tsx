import styled from "styled-components";
import { Space, Row, Col, Input, DatePicker, Button, Card } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";
import TokenSelector from "./TokenSelector";
import FlowrateEditor from "./FlowrateEditor";
import DetailBreakdown, {IDetails} from "./DetailBreakdown";

export default function GlowingContainer() {
  const [receiver, setReceiver] = useState();
  const [token, setToken] = useState();
  const [flowrate, seetFlowrate] = useState(); 
  const [endsOn, setEndsOn] = useState();


  const details: IDetails = {
    receiver: "0x123",
    token: "BTC",
    flowrate: 0.1194,
    endsOn: 20220202
  }

  return (
    <PurpleContainer>
      <ModalMain>Send</ModalMain>
      <Space direction="vertical" size="large">
        <Row>
          <Input
            allowClear
            placeholder="Receiving Address"
            prefix={
              <InboxOutlined />
            }
          />
        </Row>

        <Row>
          <Space direction="horizontal" size="middle">
            <Col span={6}>
              <TokenSelector />
            </Col>

            <Col span={18}>
              <FlowrateEditor />
            </Col>
          </Space>
        </Row>

        <Row>
          <Space direction="horizontal">
            <DatePicker showTime placeholder="Ends on" />

            <span>1.234</span>
          </Space>
        </Row>

        <Button type="primary" shape="round" block>
          Send
        </Button>
      </Space>

      <DetailBreakdown details={details} />

    </PurpleContainer>
  );
}

const PurpleContainer = styled(Card)`
  background-color: #391E5A;
  border-radius: 20px;
  box-shadow: rgb(204 204 204 / 55%) 0px 0px 6px 3px;
  border: 2px solid #80b8c2;
  // padding: 28px;
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
