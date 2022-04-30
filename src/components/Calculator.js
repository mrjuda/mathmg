// Calculator.js

import React from 'react';
import calculate from './logic/calculate';
import './styles/Calculator.css';

const Calc = () => {
  const [state, setState] = React.useState({
    total: null,
    next: null,
    operation: null,
  });

  const btnClick = (e) => {
    const { value } = e.target;
    const { total, next, operation } = calculate(state, value);
    setState({ total, next, operation });

    const result = document.getElementById('calcDisplay');

    if (next !== null) {
      result.innerHTML = next;
    } else if (total !== null) {
      result.innerHTML = total;
    } else {
      result.innerHTML = '0';
    }
  };

  return (
    <div className="calc-container">
      <div className="calc-display" id="calcDisplay"><span>0</span></div>
      <div className="line l2">
        <button type="button" onClick={btnClick} value="AC" className="key">AC</button>
        <button type="button" onClick={btnClick} value="+/-" className="key">+/-</button>
        <button type="button" onClick={btnClick} value="%" className="key">%</button>
        <button type="button" onClick={btnClick} value="÷" className="key c4">÷</button>
      </div>
      <div className="line l3">
        <button type="button" onClick={btnClick} value="7" className="key">7</button>
        <button type="button" onClick={btnClick} value="8" className="key">8</button>
        <button type="button" onClick={btnClick} value="9" className="key">9</button>
        <button type="button" onClick={btnClick} value="x" className="key c4">x</button>
      </div>
      <div className="line l4">
        <button type="button" onClick={btnClick} value="4" className="key">4</button>
        <button type="button" onClick={btnClick} value="5" className="key">5</button>
        <button type="button" onClick={btnClick} value="6" className="key">6</button>
        <button type="button" onClick={btnClick} value="-" className="key c4">-</button>
      </div>
      <div className="line l5">
        <button type="button" onClick={btnClick} value="1" className="key">1</button>
        <button type="button" onClick={btnClick} value="2" className="key">2</button>
        <button type="button" onClick={btnClick} value="3" className="key">3</button>
        <button type="button" onClick={btnClick} value="+" className="key c4">+</button>
      </div>
      <div className="line l6">
        <button type="button" onClick={btnClick} value="0" className="key key0">0</button>
        <button type="button" onClick={btnClick} value="." className="key">.</button>
        <button type="button" onClick={btnClick} value="=" className="key c4">=</button>
      </div>
    </div>
  );
};

export default Calc;
