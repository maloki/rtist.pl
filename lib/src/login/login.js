import React, { Component } from 'react'
import {LoginBackground, Input, LoginContainer, LoginLogo} from '../genericStyles/styled.js'
import {Link} from 'react-router'

class Login extends Component {
  render() {
    return (
      <LoginBackground>
        <LoginLogo>
          <Link to="/">
            <h1>Rtist.pl</h1>
          </Link>
        </LoginLogo>
        <LoginContainer>
          <h2>Logowanie</h2>
          <Input>
            <input className="active" placeholder="E-mail"></input>
          </Input> 
          <Input>
            <input type="password" placeholder="Haslo"></input>
          </Input>
          <button>Zaloguj sie</button>
          <div className="or">Lub</div>
          <button className="facebook">Zaloguj sie z Facebook</button>
        </LoginContainer>
      </LoginBackground>
    );
  }
}

export default Login;
