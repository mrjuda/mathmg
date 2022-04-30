// wHeader.js

import './styles/wHeader.css';

function WebHeader() {
  return (
    <div className="WebHeader">
      <h1 className="HeaderTitle">
        Math Magicians
      </h1>
      <ul>
        <li><a href="/mathmg">Home</a></li>
        <li>|</li>
        <li><a href="/WebCalc">Calculator</a></li>
        <li>|</li>
        <li><a href="/WebQuote">Quote</a></li>
      </ul>
    </div>
  );
}

export default WebHeader;
