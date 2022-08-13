import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const tokenList: String[] = ["WETH", "BTC", "USDC"]

const TokenSelector = () => (
  <Select
    showSearch
    style={{
      width: 200,
    }}
    placeholder="Search Token"
    optionFilterProp="children"
    // filterOption={(input, option) => option.children.includes(input)}
    // filterSort={(optionA, optionB) =>
    //   optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    // }
  >
    {tokenList.map((token, idx) => 
        <Option key={idx} value={idx}>{token}</Option>
    )}
  </Select>
);

export default TokenSelector;