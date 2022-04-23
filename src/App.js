/* eslint-disable */

import logo from './logo.svg';
import './App.css';

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
