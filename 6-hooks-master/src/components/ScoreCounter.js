import React, { useState } from 'react';

function useCounter(initialCounterValue) {
    const [counter, setCounter] = useState(initialCounterValue);

    const handlers = {
        increment: () => setCounter(counter + 1),
        decrement: () => setCounter(counter - 1)
    }
    return [counter, handlers];
}

const ScoreCounter = ({ style = {}, defaultCounter = 0 }) => {
    const [counter, { increment, decrement }] = useCounter(defaultCounter);
    return (
        <div style={style}>
            <span>{counter}</span>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
        </div>
    )
}

export default ScoreCounter;