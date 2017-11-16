import React, { Component } from 'react'
import {LoginBackground, Input, LoginContainer, LoginLogo} from '../genericStyles/styled.js'
import {Link} from 'react-router'

class Register extends Component {
  render() {
    return (
      <LoginBackground>
        <LoginLogo>
          <Link to="/">
            <h1>Rtist.pl</h1>
          </Link>
        </LoginLogo>
        <LoginContainer>
          <h2>Dolacz do grona spolecznosci Rtist.pl</h2>
          <Input>
            <input className="active" placeholder="Nazwa"></input>
          </Input>
          <Input>
            <input placeholder="E-mail"></input>
          </Input>
          <Input>
            <input type="password" placeholder="Haslo"></input>
          </Input> 
          <button>Zaloz konto</button>
          <div className="disclaimer">
            Zakladajac konto, zgadzasz sie na <Link to="/terms-of-use">warunki korzystania z serwisu.</Link>
          </div>
          <div className="or">Lub</div>
          <button className="facebook">Polacz konto Facebook</button>
          <Link className="alreadyRegistered" to="/login">
            Posiadam juz konto
          </Link>
        </LoginContainer>
      </LoginBackground>
    );
  }
}

export default Register;
