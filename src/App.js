import Title from "./Components/Title";

function App() {
  let samplePropsName = 'farnoosh';
  let samplePropsLastName = 'ramezani';
  return (
    <Title name={samplePropsName} lastName={samplePropsLastName}/>
  );
}

export default App;
