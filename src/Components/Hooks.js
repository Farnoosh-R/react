import React from "react";
import { useState } from "react";

const Hooks = () => {

    const [count, setCount] = useState(0);
    const [counter5, setCounter5] = useState(0);
    const [person, setPerson] = useState({name: '', age: ''});
    const [items, setItems] = useState(['red', 'green', 'blue']);
    const [name, setName] = useState('');

    const handleClick = () => {

        setCount(count + 1);

    }
    const handleIncrementFive = () => {
        for (let i = 0; i<5; i++){
            setCounter5((preState) => preState + 1);
        }
    }

    const handleAddName = () => {
        setItems([...items, name]);
    }

    return(
        <div>
        <button onClick={handleClick}>count {count}</button>
        <button onClick={handleIncrementFive}>count5 {counter5}</button>
        <input type="text" onChange={(e) => setPerson({...person, name: e.target.value})}/>name
        <input type="text" onChange={(e) => setPerson({...person, age: e.target.value})}/>age
        <h2>name: {person.name}</h2>
        <h2>name: {person.age}</h2>

        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={handleAddName}>Add Name</button>
        <ul>
            {items.map(item =>{
                return (
                <div>
                <li>{item}</li> 
                <span>dc</span>
            </div>
            )
            })}
        </ul>
        </div>
    );

}



export default Hooks;