import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './css/Login.css';
import FirstLine from './css/img/FirstLine.png';
import SecondLine from './css/img/SecondLine.png';
import ThirdLine from './css/img/ThirdLine.png';
import WcLogo from './css/img/WcLogo.png';
import WcLegend from './css/img/WcLegend.png';
axios.defaults.withCredentials = true;

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const error = '아이디와 비밀번호를 모두 입력하세요';

  const inputId = (e) => {
    setId(e.target.value);
  };

  const inputPw = (e) => {
    setPw(e.target.value);
  };

  function handlePreUseClick() {
    window.location.href = '/servicepage';
  }

  function handleLogin() {
    // TODO : 서버에 로그인을 요청하고, props로 전달된 callback을 호출합니다.
    // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
    if (!id || !pw) {
      alert(error);
    } else {
      axios
        .post(
          'http://localhost:4000/users/signin',
          { id, pw },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data);
          this.props.handleResponseSuccess(res.data);
          console.log(this.props.isLogin);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className="login" style={{ position: 'relative' }}>
      <div className="login--first-line">
        <img src={FirstLine} alt="FirstLine" width="100%" height="100%"></img>
      </div>
      <div className="login--second-line">
        <img src={SecondLine} alt="SecondLine" width="100%" height="100%"></img>
      </div>
      <div className="login--third-line">
        <img src={ThirdLine} alt="ThirdLine" width="100%" height="100%"></img>
      </div>
      <div className="login--wc-logo">
        <img src={WcLogo} className="login--wc-logo" alt="WcLogo"></img>
      </div>
      <img src={WcLegend} className="login--wc-legend" alt="WcLegend"></img>
      <form className="login--form" onSubmit={(e) => e.preventDefault()}>
        <input className="login--id" placeholder=" ID" onChange={inputId}></input>
        <input className="login--password" placeholder=" PW" type="password" onChange={inputPw}></input>
        <button className="login--login-btn" type="submit" onClick={handleLogin}>Login</button>
        <button className="login--pre-use-btn" onClick={() => handlePreUseClick()}>Pre Use</button>
      </form>
    </div>
  );
}

export default withRouter(Login);