// wCalc.js

import './styles/wCalc.css';
import Calc from './Calculator';

function WebCalc() {
  return (
    <div className="wCalc">
      <h2 className="HeaderTitle">
        Try our nice calculator!
      </h2>
      <div className="calc">
        <Calc />
      </div>
    </div>
  );
}

export default WebCalc;
