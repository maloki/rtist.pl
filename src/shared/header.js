import React, { Component } from 'react'
import styled from 'styled-components'
import  {Link} from 'react-router'

const Wrapper = styled.div`
  width:100%;
  height:calc(40px + 4px);
  background-color:#F0F3F5;
  overflow: hidden;
  line-height: calc(40px + 4px);
  border-bottom:4px solid #3BAB95;
  padding:0 100px;
  color:#222222;
  position:fixed;
  top:0;
  left:0;
  z-index: 99;
`

const Logo = styled.div`
  font-size:22px;
  line-height: 40px;
  float:left;
  font-size: 32px;
  a{
    color:#222222;
    text-decoration: none;
  }
`

const Categories = styled.div`
  ul{
    text-align: center;
    a{
      color:#222222;
    }
    li{
      display:inline-block;
      margin-right:10px;
      padding: 0px 12px;
      line-height: 40px;
      &:hover{
        font-weight: bold;
      }
      &.active{
        font-weight: bold;
      }
    }
  }
`

const Navigation = styled.div`
  float:right;
  ul{
    position: relative;
    .box{
      display: inline-block;
      position: relative;
      margin-right: 19px;
      &.second{
        margin-right: 0;
      }
      .top-line{
        background-color: #3BAB95;
        width:100%;
        height:2px;
        position: absolute;
        top:4px;
      }
      a{
        color:#222222;
      }
      li{
        display: inline-block;
        text-decoration: none;
        list-style: none;
        padding: 0px 4px;
      }
    }
    .line{
      display: inline-block;
      -ms-transform: rotate(132deg);
      -webkit-transform: rotate(20deg);
      transform: rotate(118deg);
      width: 40px;
      height: 2px;
      background-color: #3BAB95;
      position: absolute;
      left: 72px;
      top: 22px;
    }
  }
`
class Header extends Component {
  render() {
    return (
        <Wrapper>
          <div className="wrapper">
            <Logo>
              <Link to="/">
                <h1>Rtist.pl</h1>
              </Link>
            </Logo>
            <Navigation>
              <ul>
                <div className="box">
                  <Link to="/custom">
                    <li>
                      Zaloguj sie
                    </li>
                  </Link>
                </div>
                <div className="line">

                </div>
                <div className="box second">
                  <div className="top-line"></div>
                  <Link to="/custom">
                    <li>
                      Rejestracja
                    </li>
                  </Link>
                </div>
              </ul>
            </Navigation>
            <Categories>
              <ul>
                <Link to="/">
                  <li className="active">Wszystkie</li>
                </Link>
                <Link to="/">
                  <li>Wiersze</li>
                </Link>
                <Link to="/">
                  <li>Ksiazki</li>
                </Link>
                <Link to="/">
                  <li>Obrazy</li>
                </Link>
                <Link to="/">
                  <li>Graffiti</li>
                </Link>
                <Link to="/">
                  <li>Muzyka</li>
                </Link>
              </ul>
            </Categories>
            </div>
        </Wrapper>
    );
  }
}

export default Header;
