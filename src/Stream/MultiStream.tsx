import styled from "styled-components";
import { Space, Row, Col, Input, DatePicker, Button, Card, Form, Segmented, Select, InputNumber, notification } from "antd";
import { InboxOutlined, MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { createContext, FC, useEffect, useMemo, useState } from "react";
import TokenSelector from "./TokenSelector";
import FlowrateEditor from "./FlowrateEditor";
import DetailBreakdown, { IDetailBreakdownMulti, IDetailBreakdownSingle } from "./DetailBreakdown";
import { SEC } from "../constants";
import Link from "next/link";
///////
// token selector
const { Option } = Select;
const tokenList: String[] = ["WETH", "BTC", "USDC"]
// flowrate editor
interface IFlowrateUnit {
  display: string,
  scale: number
};

const flowrateUnits: Record<string, number> = {
  "second": SEC,
  "min": 60 * SEC,
  "hour": 3600 * SEC,
  "day": 86400 * SEC,
  "month": 30 * 86400 * SEC,
}
////////


const StreamingCard: FC<{ mode: string, _streamType: string, txData: IDetailBreakdownSingle | IDetailBreakdownMulti | {} }> = ({ mode, _streamType, txData }) => {

  const [streamType, setStreamType] = useState<string>(_streamType || "Direct");
  const [detailData, setDetailData] = useState<any>();
  useEffect(() => setStreamType(_streamType), [_streamType])

  const disableEdit = mode == "Update";

  const updateDetailData = (changedVal: any, allVal: any) => {
    console.log("test fields: ", form.getFieldValue(["receivers"]))
    if (allVal.token)
      setDetailData(allVal);
    else
      setDetailData(null);
    console.log("test all data ", allVal)
  }

  const handleSubmit = (values: any) => {
    console.log(values);

    notification.open({
      message: 'Transaction Submitted',
      description:
      <a target="_blank" href="https://google.com" >Open transaction in explorer.</a>,
    });
  }

  const [form] = Form.useForm();
  //   form.setFields([{
  //     }]);

  return (
    <PurpleContainer>
      <Space direction="vertical" size="large">

        <WhiteTitle>{mode}</WhiteTitle>


        <Segmented block disabled={disableEdit} options={["Direct", "Distribution"]} value={streamType} onChange={setStreamType} />

        <Form form={form} name="dynamic_form_item" size="large" style={{ width: "100%" }} onFinish={handleSubmit}
          onValuesChange={updateDetailData}
          onFieldsChange={console.log}
          initialValues={txData}
        >

          {streamType == "Direct" ?
            <>
              {/* single receiver: direct */}
              <Form.Item name="receiver">
                <Input
                  disabled={disableEdit}
                  allowClear
                  placeholder="Receiving Address"
                  prefix={
                    <InboxOutlined />
                  }
                />
              </Form.Item>
            </>
            :
            <>
              {/* multiple receivers: distribution, https://ant.design/components/form/#components-form-demo-dynamic-form-items */}
              < Form.List
                name="receivers"
                rules={[
                  {
                    validator: async (_, names) => {
                      if (!names || names.length < 2) {
                        return Promise.reject(new Error('At least 2 receivers'));
                      }
                    },
                  },
                ]}
              >
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map(({ key, name, ...restField }, index) => (
                      <Space key={key} style={{ display: 'flex', marginBottom: 8, }} align="center">
                        <Form.Item
                          required={false}
                          name={[name, 'addr']}
                        >
                          <Input
                            disabled={disableEdit}
                            allowClear
                            placeholder="Receiving Address"
                            prefix={
                              <InboxOutlined />
                            }
                          />
                        </Form.Item>

                        <Form.Item name={[name, 'perc']} style={{ width: "6.5rem" }}>
                          <InputNumber max={100} min={0} addonAfter="%" />
                        </Form.Item>

                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            color="white"
                            onClick={() => remove(name)}
                          />
                        ) : null}
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: '60%' }}
                        icon={<PlusOutlined />}
                      >
                        Add receiver
                      </Button>
                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </>
          }
          {/* TokenSelector and Flowrate */}
          <Form.Item style={{ display: "inline-block" }}>
            {/* TokenSelector */}
            <Form.Item name="token">
              <Select
                disabled={disableEdit}
                showSearch
                style={{
                  width: 200,
                }}
                placeholder="Search Token"
                optionFilterProp="children"
              >
                {tokenList.map((token, idx) =>
                  <Option key={idx} value={token}>{token}</Option>
                )}
              </Select>
            </Form.Item>

            {/* Flowrate */}
            <Input.Group compact>
              <Form.Item name={['flowrate', 'value']}>
                <NumberInput placeholder="Flow Rate" type="number" />
              </Form.Item>
              <Form.Item name={['flowrate', 'unit']}>
                <Select style={{ width: 120 }}>
                  {Object.keys(flowrateUnits).map(unit =>
                    <Option key={unit} value={unit}>/ {unit}</Option>
                  )}
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>

        </Form>

      </Space>

      {
        detailData &&
        <DetailBreakdown streamType={streamType} detail={detailData} />
      }

    </PurpleContainer >
  );
}

export default StreamingCard;

const PurpleContainer = styled(Card)`
  background-color: #391E5A;
  border-radius: 20px;
  box-shadow: rgb(204 204 204 / 55%) 0px 0px 6px 3px;
  border: 2px solid #80b8c2;
  // padding: 28px;
`;

const WhiteTitle = styled.h4`
  color: white;
`;

const NumberInput = styled(Input)`
  width: 5rem;
`;