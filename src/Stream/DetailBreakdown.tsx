import { FC } from "react";
import styled from "styled-components";
import { Card, Divider, Typography } from "antd";

export interface IDetails {
    receiver: string,
    token: string,
    flowrate: number,
    endsOn: number
  };

const DetailBreakdown: FC<{details: IDetails}> = ({details}) => {
    return (
    <>
        <Divider />

        <GreenLineContainer>
            <table>
                <tbody>
                    <tr>
                        <Td>Receiver</Td>
                        <Td>{details.receiver}</Td>
                    </tr>
                    <tr>
                        <Td>Flow Rate</Td>
                        <Td>{details.flowrate}</Td>
                    </tr>
                    <tr>
                        <Td>Ends on</Td>
                        <Td>{details.endsOn}</Td>
                    </tr>
                </tbody>
            </table>
        </GreenLineContainer>
    </>
    )
}

export default DetailBreakdown;

const GreenLineContainer = styled(Card)`
  border-color: #16659b;
  border-radius: 10px;
  background: #16659b2e;
  color: white;
`;

const Td = styled.td`
    padding-right: 2rem;
`