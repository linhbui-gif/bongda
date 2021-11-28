import React from 'react';
import { withRouter } from 'react-router-dom';
import './css/FirstPage.css';
import FirstLine from './css/img/FirstLine.png';
import SecondLine from './css/img/SecondLine.png';
import ThirdLine from './css/img/ThirdLine.png';
import WcLogo from './css/img/WcLogo.png';
import WcLegend from './css/img/WcLegend.png';

function FirstPage() {
  function handleLoginClick() {
    window.location.href = '/login';
  }

  function handleSignClick() {
    window.location.href = '/signup';
  }

  return (
    <div className="first-page">
      <div className="first-page--first-line">
        <img src={FirstLine} alt="FirstLine" width="100%" height="100%"></img>
      </div>
      <div className="first-page--second-line">
        <img src={SecondLine} alt="SecondLine" width="100%" height="100%"></img>
      </div>
      <div className="first-page--third-line">
        <img src={ThirdLine} alt="ThirdLine" width="100%" height="100%"></img>
      </div>
      <img className="first-page--wc-logo" src={WcLogo} alt="WcLogo"></img>
      <img className="first-page--wc-legend" src={WcLegend} alt="WcLegend"></img>
      <button className="first-page--login" onClick={() => handleLoginClick()}>Login</button>
      <button className="first-page--sign-up" onClick={() => handleSignClick()}>Sign Up</button>
    </div>
  );
}

export default withRouter(FirstPage);
