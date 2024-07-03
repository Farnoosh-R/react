import React, { useMemo, useState } from "react";



const Counter = () => {

    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);
    
    const incrementOne = () => {
        return setCounterA(counterA + 1);
    }
    const incrementTwo = () => {
        return setCounterB(counterB + 1);
    }
    const isEven = useMemo(() => {
        if (counterA % 2 === 0){
            return true
        }else{
            return false
        }
    }, [counterA]);



    return(
        <div>
            <h3>counter</h3>
            <button onClick={incrementOne}>count: {counterA}</button>
            <span>{isEven() ? 'even' : 'odd'}</span>
            <button onClick={incrementTwo}>count: {counterB}</button>
        </div>
    );
}

export default Counter;