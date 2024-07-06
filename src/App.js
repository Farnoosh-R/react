import Title from "./Components/Title";
import Form from "./Components/Form";
import Hooks from "./Components/Hooks";
import CompA from "./Components/CompA";
import React from "react";
import Counter from "./Components/Counter";
import Login from "./Components/Login";
import CounterCustomHook from "./Components/CounterCustomHook";

export const UserContext = React.createContext();

function App() {
  let samplePropsName = 'farnoosh';
  let samplePropsLastName = 'ramezani';

  const handleClick3 = (name) => {
    console.log(name);
  }

  return (
    //<Title name={samplePropsName} lastName={samplePropsLastName} handleClick3={handleClick3}/>
    <div>
          <Title name={samplePropsName} lastName={samplePropsLastName} handleClick3={handleClick3}>
        <p>test</p>
      </Title>
      <Form/>
      <Hooks/>
      <UserContext.Provider value={'farnoosh'}>
      <CompA/>
      </UserContext.Provider>
      <Counter />
      <Login />
      <CounterCustomHook />
    </div>
  );
}

export default App;
