import Title from "./Components/Title";
import Form from "./Components/Form";
import Hooks from "./Components/Hooks";

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
    </div>
  );
}

export default App;
