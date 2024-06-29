import React from "react";
import './Title.scss';
// function Title(){
//     return(
//       <React.Fragment>
//       <h1>webprog.io</h1>
//       <h2>webprog.io</h2>
//       </React.Fragment>
//     );
//   }
const Title = (props) => {
  let name = 'webProg.io';
  let obj = {a: 1, b:2};
  let arr = [1,2,3];
  let bool = true;

  const handleClick = () => {
    console.log('hi');
  }

  const handleClick2 = (name) => {
    console.log(name);
  }

  return(
    <div>
    <h1>{name}</h1>
    <h2>{obj.a}</h2>
    <h3>{arr.map(item => {
      return item + 2
    })}</h3>
    <h4>{bool ? 'true' : 'false'}</h4>
    <p className="fs-3">test classNameName</p>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button>

      <button onClick={handleClick}>click</button>
      <button onClick={() => {
        handleClick2('farnoosh-R')
      }}>click2</button>

      <h2>name: {props.name}</h2>
      <h2>name: {props.lastName}</h2>
      <button onClick={() => props.handleClick3('farnoosh')}>click me</button>
      {props.children}
    </div>
  );
}

  export default Title;