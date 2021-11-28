import React, { useState } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import FirstPage from './pages/FirstPage';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Navigation from './pages/Navigation'
import SelectWc from './pages/SelectWc';
import ServicePage from './pages/ServicePage';
import SignUp from './pages/SignUp';

function App () {

  const [isLogin, setLogin] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  
  function handleResponseSuccess(data) {
    // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
    // axios
    //    .get("https://localhost:4000/users/userinfo")
    //    .then((res) => {
    //      this.setState({ isLogin: true, userinfo: res.data });
    //      console.log(this.state.userinfo)
    //      this.props.history.push("/");
    //    })
    //    .catch((err) => {
    //      console.log(err);
    //    });
    this.setState({ isLogin: true });
    this.issueAccessToken(data.data.accessToken);
  }

  function issueAccessToken(token) {
    this.setState({ accessToken: token });
  }

  function handleLogout () {
    axios.post('http://localhost:4000/users/signout')
    .then(res => {
      console.log(res.message)
    });
  }
  
  function sendComment () {
    axios.post('http://localhost:4000/reviews/review')
  }
  
  return (
    <div className='App'>
      <Switch>
        <Route 
          exact path='/firstpage'
          render={() => 
          <FirstPage />
          }
        />
        <Route
          exact 
          path='/login'
          render={() => 
          <Login />
          // 원래 <Login />에 있던 props -> handleResponseSuccess={this.handleResponseSuccess.bind(this)} isLogin={isLogin}
          }
        />
        <Route exact path='/signup' render={() => <SignUp />} />
        <Route exact path='/selectwc' render={() => <SelectWc />} />
        <Route 
          exact 
          path='/servicepage' 
          render={() => 
          <ServicePage />} />
        <Route exact path='/mypage' render={() => <MyPage userInfo={userInfo} />} />
        <Route exact path='/navigation' render={() => <Navigation />} />
        </Switch> 
      </div>
  )
}

export default withRouter(App);