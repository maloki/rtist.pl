import React, { Component } from 'react'
import styled from 'styled-components'
import  {Link} from 'react-router'

const Wrapper = styled.div`
  width:100%;
  height:calc(40px + 4px);
  background-color:#F0F3F5;
  border-bottom:4px solid #3BAB95;
  padding:0 100px;
  color:#222222;
  position:fixed;
  top:0;
  left:0;
  z-index: 99;
`

const Logo = styled.div`
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
  .navigationPanel{
    position: relative;
    .user{
      margin-top:6px;
      cursor:pointer;
      float:right;
      .userDropDown{
        background-color:#fff;
        position:fixed;
        top:45px;
        width:inherit;
        display: none;
        .arrow{
          width:10px;
          height:10px;
          transform: rotate(45deg);
          position:absolute;
          left: 10px;
          top:-6px;
          z-index:1;
          background-color:#fff;
        }
        ul{
          z-index:1;
          a{
            color:#222222;
            li{
              padding:20px 24px;
              border-bottom:1px solid #F0F3F5;
              &:hover{
                background-color: rgba(0, 0, 0, 0.1);
                -webkit-transition: background-color 0.2s ease-in-out;
                -ms-transition:     background-color 0.2s ease-in-out;
                transition:         background-color 0.2s ease-in-out;
              }
              .icon{
                display: inline-block;
              }
              .text{
                display: inline-block;
                margin-left:10px;
              }
            }
          }
        }
      }
      img{
        border-radius:50%;
        height:30px;
        width:30px;
        border:2px solid #3BAB95;
      }
    }
    .notifications{
      float:left;
      position: relative;
      margin-right: 20px;
      margin-top:2px;
      cursor: pointer;
      line-height: calc(40px);
      .count{
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top:-1px;
        color:#fff;
        font-size:12px;
        text-align:center;
      }
      i{
        font-size:20px;
        color:#FA3E3E;
        font-weight: bold;
      }
    }

  }
`
const logged = true

class Header extends Component {
  constructor(props) {
        super(props);
        this.state = {userDropDown:false}
        this.toggleUserDropDown = this.toggleUserDropDown.bind(this)
  }
  toggleUserDropDown(){
    if(this.state.userDropDown === false){
      this.setState({...this.state, userDropDown: true})
    }else{
      this.setState({...this.state, userDropDown: false})
    }
  }
  render() {
    let navigation = <div></div>
    if(logged){
      navigation = <div className="navigationPanel">
        <div className="notifications">
          <i className="fa fa-bell" aria-hidden="true"></i>
          <div className="count">14</div>
        </div>
        <div onClick={this.toggleUserDropDown} className="user">
          <img align="middle" alt="todo:userName" src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p160x160/23319229_746519135539751_473331122454521903_n.jpg?oh=8e5fd7576743b98f36e76d24edc4e737&oe=5AAD5B36"></img>
          <div className="userDropDown" style={{display: (this.state.userDropDown === true ? "inherit" : "none")}}>
            <div className="arrow"></div>
            <ul>
              <Link to="settings">
                <li>
                  <div className="icon">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div className="text">
                    Profil
                  </div>
                </li>
              </Link>
              <Link to="settings">
                <li>
                  <div className="icon">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div className="text">
                    Profil
                  </div>
                </li>
              </Link>
              <Link to="settings">
                <li>
                  <div className="icon">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div className="text">
                    Profil
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    }else{
      navigation = <ul>
        <div className="box">
          <Link to="/login">
            <li>
              Zaloguj sie
            </li>
          </Link>
        </div>
        <div className="line">

        </div>
        <div className="box second">
          <div className="top-line"></div>
          <Link to="/register">
            <li>
              Rejestracja
            </li>
          </Link>
        </div>
      </ul>
    }
    return (
        <Wrapper>
          <div className="wrapper">
            <Logo>
              <Link to="/">
                <h1>Rtist.pl</h1>
              </Link>
            </Logo>
            <Navigation>
              {navigation}
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
