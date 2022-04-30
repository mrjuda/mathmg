// Calc.js
/* eslint-disable */
import React from 'react';
import calculate from './logic/calculate';
import operate from './logic/operate';
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
    <div class="calc-container">
      <div class="calc-display" id="calcDisplay"><span>0</span></div>
      <div class="line l2">
        <button onClick={btnClick} value="AC" class="key">AC</button>
        <button onClick={btnClick} value="+/-" class="key">+/-</button>
        <button onClick={btnClick} value="%" class="key">%</button>
        <button onClick={btnClick} value="÷" class="key c4">÷</button>
      </div>
      <div class="line l3">
        <button onClick={btnClick} value="7" class="key">7</button>
        <button onClick={btnClick} value="8" class="key">8</button>
        <button onClick={btnClick} value="9" class="key">9</button>
        <button onClick={btnClick} value="x" class="key c4">x</button>
      </div>
      <div class="line l4">
        <button onClick={btnClick} value="4" class="key">4</button>
        <button onClick={btnClick} value="5" class="key">5</button>
        <button onClick={btnClick} value="6" class="key">6</button>
        <button onClick={btnClick} value="-" class="key c4">-</button>
      </div>
      <div class="line l5">
        <button onClick={btnClick} value="1" class="key">1</button>
        <button onClick={btnClick} value="2" class="key">2</button>
        <button onClick={btnClick} value="3" class="key">3</button>
        <button onClick={btnClick} value="+" class="key c4">+</button>
      </div>
      <div class="line l6">
        <button onClick={btnClick} value="0" class="key key0">0</button>
        <button onClick={btnClick} value="." class="key">.</button>
        <button onClick={btnClick} value="=" class="key c4">=</button>
      </div>
    </div>
  );
}

export default Calc;