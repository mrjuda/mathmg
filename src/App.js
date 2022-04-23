/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {    
    // Update the document title using the browser API    
    document.title = `JL ${count} times`;  
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

function Welcome(usr) {
  return <p>Hello, {usr.name} ({usr.position}), welcome to JudaLabs!<br></br></p>;
}

function HiThere() {
  return (
      <Welcome name="Judá" position="CEO" />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HiThere />
        <Example />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
