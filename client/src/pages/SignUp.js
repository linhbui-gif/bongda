import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './css/SignUp.css';
import FirstLine from './css/img/FirstLine.png';
import SecondLine from './css/img/SecondLine.png';
import ThirdLine from './css/img/ThirdLine.png';
import WcLogo from './css/img/WcLogo.png';
import WcLegend from './css/img/WcLegend.png';
axios.defaults.withCredentials = true;

function SignUp() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');
  const error = '회원정보를 모두 입력하세요';

  const inputId = (e) => {
    setId(e.target.value);
  };

  const inputPw = (e) => {
    setPw(e.target.value);
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };

  function handleSignUp() {
    // TODO : 서버에 회원가입을 요청 후 로그인 페이지로 이동하세요.
    // 회원가입 성공 후 로그인 페이지 이동은 다음 코드를 이용하세요.
    if (!id || !pw || !email) {
      alert(error);
    } else {
      axios({
        method: 'post',
        url: 'https://localhost:4000/signup',
        data: {
          id: id,
          pw: pw,
          email: email,
        },
      })
        .then((res) => {
          this.props.history.push('/');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div className="sign-up">
      <div className="sign-up--first-line">
        <img src={FirstLine} alt="FirstLine" width="100%" height="100%"></img>
      </div>
      <div className="sign-up--second-line">
        <img src={SecondLine} alt="SecondLine" width="100%" height="100%"></img>
      </div>
      <div className="sign-up--third-line">
        <img src={ThirdLine} alt="ThirdLine" width="100%" height="100%"></img>
      </div>
      <div className="sign-up--wc-logo">
        <img className="sign-up--wc-logo" src={WcLogo} alt="WcLogo"></img>
      </div>
      <img className="sign-up--wc-legend" src={WcLegend} alt="WcLegend"></img>
      <form className="sign-up--form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="sign-up--id"
          placeholder=" ID"
          onChange={inputId}
        ></input>
        <input
          className="sign-up--password"
          placeholder=" PW"
          type="password"
          onChange={inputPw}
        ></input>
        <input
          className="sign-up--email"
          placeholder=" EMAIL"
          type="email"
          onChange={inputEmail}
        ></input>
        <button
          className="sign-up--sign-up-btn"
          type="submit"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default withRouter(SignUp);