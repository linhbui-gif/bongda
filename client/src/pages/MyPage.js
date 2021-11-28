import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
    this.deleteAccout = this.deleteAccout.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  deleteAccout() {
    axios.post('http://localhost:4000/users/delete_account').then((res) => {
      console.log(res.message);
    });
  }

  changePassword() {
    axios.post('http://localhost:4000/users/modify_review').then((res) => {
      console.log(res.message);
    });
  }

  render() {
    return (
      <div id="div1">
        11
        <center id="center">
          <div id="service-name">
            <h1 class="service_name">Gangbuk CafeTrip</h1>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div id="user-email">
              <div>
                <span class="user-email-text">이메일</span>
                <input class="user-email-input" type="email"></input>
              </div>
            </div>
            <div id="user-password">
              <div>
                <span class="user-password-text">비밀번호</span>
                <input class="user-password-input" type="password"></input>
                <button class="modify-password" type="submit">
                  수정하기
                </button>
              </div>
            </div>
            <div id="user-name">
              <div>
                <span class="user-name-text">유저네임</span>
                <input class="user-password-input" type="text"></input>
                <button
                  class="modify-name"
                  type="submit"
                  onClick={this.changePassword}
                >
                  수정하기
                </button>
              </div>
            </div>
            <div id="mypage-buttons">
              <button
                class="leave-button"
                type="submit"
                onClick={this.deleteAccout}
              >
                회원탈퇴
              </button>
              <Link to="/servicepage">
                <button class="previous-button">이전으로</button>
              </Link>
            </div>
          </form>
        </center>
      </div>
    );
  }
}

{
  /* <input class='user-email-input' type='email' onChange={this.handleInputValue("email")}></input> */
}
{
  /* <button class='leave-button' type='submit' onClick={this.handleLogout}>회원탈퇴</button> */
}

export default withRouter(MyPage);