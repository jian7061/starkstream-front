import millify from "millify";
import { FC, useEffect, useState } from "react";
import { scaleTimeToSec } from "../constants";
export interface IRealtimeBalanceProps {
    startTime: number,
    staticBalance: number,
    flowrate: number
};

const updateInterval = 100; // millisecond

export const RealtimeBalance: FC<IRealtimeBalanceProps> = (props) => {
    const [realtimeBal, setRealtimeBal] = useState<number>(0);
    
    useEffect(() => {
        const intervalFlowrate = props.flowrate * (updateInterval * scaleTimeToSec);

        const sti = setInterval(() => {
            const timeElapsed = Date.now() - props.startTime;
            const newBal = intervalFlowrate * timeElapsed + props.staticBalance;
            setRealtimeBal(newBal);
        }, updateInterval)

        return () => clearInterval(sti);
    }, [props])

    return (
        <div>
            {millify(realtimeBal, { precision: 5 })}
        </div>
    );
}
