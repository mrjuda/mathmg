// wCalc.js

import './styles/wCalc.css';
import Calc from './Calculator';

function WebCalc() {
  return (
    <div className="WebPage">
      <h1 className="HeaderTitle">
        || CALCULATOR || MM
      </h1>
      <Calc />
    </div>
  );
}

export default WebCalc;
