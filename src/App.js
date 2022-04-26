// App.js
/* eslint-disable */

import './App.css';
import React, { Component, useState, useEffect } from 'react';
import Calc from './components/Calculator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Calc />
    );
  }
}

