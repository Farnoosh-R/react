import { useReducer } from "react";
import React from "react";


// const initialstate = {
//     count: 0
// };
const initialstate = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
            //return {...state, count: state.count + 1}
        case 'dencrement':
            return state - 1
           // return {...state, count: state.count - 1}
        case 'reset':
            return initialstate
        default:
            return state
    }
}


const Hooks = () => {
// const [counter, setCounter] = useState(0);

//const [state, dispatch] = useReducer(reducer, initialstate);
const [count, dispatch] = useReducer(reducer, initialstate);
const [countTwo, dispatchTwo] = useReducer(reducer, initialstate);

    return(
        <div>
            <h3>{count}</h3>
            {/*            <button onClick={() => setCounter(counter + 1)}>increment</button>
            <button onClick={() => setCounter(counter - 1)}>dencrement</button>
            <button onClick={() => setCounter(0)}>dencrement</button> */}
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('dencrement')}>dencrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
            <br/>
            <h3>{countTwo}</h3>
            <button onClick={() => dispatchTwo('increment')}>increment</button>
            <button onClick={() => dispatchTwo('dencrement')}>dencrement</button>
            <button onClick={() => dispatchTwo('reset')}>reset</button>
        </div>
    );

}



export default React.memo(Hooks);