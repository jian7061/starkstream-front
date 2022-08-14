import { FC } from "react";
import styled from "styled-components";
import { Card, Divider, Typography } from "antd";

export interface IDetailBreakdownSingle {
    receiver: string,
    token: string,
    flowrate: {
        value: number,
        unit: string
    },
};

interface IReceiver {
    addr: string,
    perc: number
}
export interface IDetailBreakdownMulti {
    receivers: IReceiver[],
    token: string,
    flowrate: {
        value: number,
        unit: string
    },
};

const DetailBreakdown: FC<{ streamType: string, detail: IDetailBreakdownSingle | IDetailBreakdownMulti }> = ({ streamType, detail }) => {
    return (
        <>
            <Divider />

            <GreenLineContainer>
                <table>
                    <tbody>
                        {(streamType == "Direct") ?
                            <tr>
                                <Td>Receiver</Td>
                                <Td>{(detail as IDetailBreakdownSingle).receiver || "-"}</Td>
                            </tr>
                            :
                            (detail as IDetailBreakdownMulti).receivers?.map((d: IReceiver, idx: number) => {
                                const receiverAddr = d?.addr || "-";
                                const percentage = d?.perc || 0;
                                return (<tr key={idx}>
                                    <Td>Receiver {idx + 1}</Td>
                                    <Td>{receiverAddr}</Td>
                                    <Td>{percentage.toFixed(1)}%</Td>
                                </tr>)
                            }
                            )

                        }

                        <tr>
                            <Td>Flow Rate</Td>
                            <Td>{detail.flowrate.value || "-"} {detail.token} / second</Td>
                        </tr>
                        {/* <tr>
                        <Td>Ends on</Td>
                        <Td>{details.endsOn}</Td>
                    </tr> */}
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