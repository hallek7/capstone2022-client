import React from 'react';
import "./indvpost.css";
import Sidenav from "../../components/sidenav/Sidenav";
import Eachpost from '../../components/eachpost/Eachpost';

function Indvpost() {
return (
  <div className="invdpost"> 
  <Eachpost/>
  <Sidenav/>
  </div>

);
}

export default Indvpost