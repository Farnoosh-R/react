import { useState } from "react"


const useCounter = (value = 0, number) => {

    const [count, setCount] = useState(value);

    const increment = () => {
        //setCount(count + 1;
        setCount(count + number);
    }
    const decrement = () => {
      //  setCount(count - 1);
      setCount(count - number);
    }
    const reset = () => {
        setCount(0);
    }
    
    return {count, increment, decrement, reset};
}

export default useCounter;