import { FC, useState } from "react";
import { Row, Select, Input, Col } from "antd";

const { Option } = Select;

interface IFlowrateUnit {
    display: string,
    scale: number
};
const flowrateUnits: Record<string, IFlowrateUnit> = {
    "s": {
        display: "/ second",
        scale: 1000
    },
    "m": {
        display: "/ min",
        scale: 60_1000
    },
    "h": {
        display: "/ hour",
        scale: 3600_000
    },
    "d": {
        display: "/ day",
        scale: 86400_000
    },
    "M": {
        display: "/ month",
        scale: 30 * 86400_000
    }
}

const FlowrateEditor: FC = () => {
    const [flowrateUnit, setFlowrateUnit] = useState('m');

    return (
        <Row>
            <Col span={16}>
                <Input placeholder="Flow Rate" />
            </Col>
            <Col span={8}>
                <Select defaultValue="s" style={{ width: 120 }} onChange={setFlowrateUnit}>
                    {Object.keys(flowrateUnits).map(key =>
                        <Option key={key} value={key}>{flowrateUnits[key].display}</Option>
                    )}
                </Select>
            </Col>
        </Row>
    )
}

export default FlowrateEditor;