import React, { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";


class App extends Component
{
  render() 
  {
    return <Say/>
    // return <Counter/>;
    // return <MyComponent name="React" favoriteNumber={1}>리엑트</MyComponent>
  }
}
// function App() {
//   const name = '리엑트';
//   return <div className="react">{name}</div>
// }

export default App;
