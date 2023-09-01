import React, { useContext, useRef, useState } from "react";
import { PartyContext } from "./PartyContext";

export const RollContext = React.createContext();

const STATUS = {
    ROLLING: 'ROLLING',
    DONE: 'DONE'
};

const DELAY = 50;
const MAX_COUNT_MIN = 10;
const MAX_COUNT_MAX = 30;

const d20 = () => {
    return Math.floor(Math.random() * 20) + 1;
};

export const RollProvider = ({ children }) => {
    const [status, setStatus] = useState(STATUS.ROLLING);
    const [result, setResult] = useState({});
    const count = useRef(0);
    const attrKey = useRef(null);
    const interval = useRef(null);
    const maxCounts = useRef({});
    const { party } = useContext(PartyContext);

    const roll = (attribute) => {
        attrKey.current = attribute;
        setStatus(STATUS.ROLLING);
        count.current = 0;
        maxCounts.current = party.reduce((acc, cur) => {
            return {
                ...acc,
                [cur.id]: Math.floor(Math.random() * (MAX_COUNT_MAX - MAX_COUNT_MIN)) + MAX_COUNT_MIN
            }
        }, {})

        interval.current = setInterval(oneRoll, DELAY);
    };

    const oneRoll = () => {
        if (count.current === MAX_COUNT_MAX) {
            setStatus(STATUS.DONE);
            clearInterval(interval.current);
        } else {
            count.current++;
            setResult(result => (party.reduce((acc, cur) => {
                return {
                    ...acc,
                    [cur.id]: count.current >= maxCounts.current[cur.id] ? (result[cur.id]) : (d20() + (cur[attrKey.current] || 0))
                }
            }, {})));
        }
    };

    return (
        <RollContext.Provider value={{
            result,
            status, 
            roll,
            attribute: attrKey.current
        }}>
            {children}
        </RollContext.Provider>
    )
};