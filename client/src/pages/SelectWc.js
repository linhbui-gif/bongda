import React from 'react';
import { withRouter } from 'react-router-dom';
import './css/SelectWc.css';
import './css/DropDown.css';
import DropDown from './DropDown';
import FirstLine from './css/img/FirstLine.png';
import SecondLine from './css/img/SecondLine.png';
import ThirdLine from './css/img/ThirdLine.png';
import WcLogo from './css/img/WcLogo.png';
import WcLegend from './css/img/WcLegend.png';

function SelectWc() {

  const filterData = ['2010'];
  const selectValue = '';

  return (
    <div className="select-wc">
      <div className="select-wc--first-line">
        <img src={FirstLine} alt="FirstLine" width="100%" height="100%"></img>
      </div>
      <div className="select-wc--second-line">
        <img src={SecondLine} alt="SecondLine" width="100%" height="100%"></img>
      </div>
      <div className="select-wc--third-line">
        <img src={ThirdLine} alt="ThirdLine" width="100%" height="100%"></img>
      </div>
      <img className="select-wc--wc-logo" src={WcLogo} alt="WcLogo"></img>
      <img className="select-wc--wc-legend" src={WcLegend} alt="WcLegend"></img>
      <DropDown></DropDown>
    </div>
  );
}

export default withRouter(SelectWc);