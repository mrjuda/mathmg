// Calc.js
/* eslint-disable */
import React from 'react';
import calculate from './logic/calculate';
import operate from './logic/operate';
import './Calculator.css';

class Calc extends React.Component {
  render() {
    return (
      <div class="calc-container">
        <div class="line display">
          <span>0</span>
        </div>
        <div class="line l2">
          <button class="key">AC</button>
          <button class="key">+/-</button>
          <button class="key">%</button>
          <button class="key c4">÷</button>
        </div>
        <div class="line l3">
          <button class="key">7</button>
          <button class="key">8</button>
          <button class="key">9</button>
          <button class="key c4">x</button>
        </div>
        <div class="line l4">
          <button class="key">4</button>
          <button class="key">5</button>
          <button class="key">6</button>
          <button class="key c4">-</button>
        </div>
        <div class="line l5">
          <button class="key">1</button>
          <button class="key">2</button>
          <button class="key">3</button>
          <button class="key c4">+</button>
        </div>
        <div class="line l6">
          <button class="key key0">0</button>
          <button class="key">.</button>
          <button class="key c4">=</button>
        </div>
      </div>
    );
  }
}

export default Calc;