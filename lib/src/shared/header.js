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
        top:44px;
        width:inherit;
        display: none;
        right:62px;
        .arrow{
          width: 34px;
          height: 34px;
          transform: rotate(45deg);
          position:absolute;
          left: 38px;
          top: 0px;
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
    .notificationBell{
      &.new{
        .count{
          display:inherit;
        }
        i{
          color:#FA3E3E;
        }
      }
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
        line-height: 40px;
        display:none;
      }
      i{
        font-size:20px;
        color:rgba(0,0,0,0.6);
        font-weight: bold;
        line-height: 40px;
      }
    }
      .notificationDropDown{
        position:fixed;
        top:44px;
        background-color:#fff;
        right:100px;
        box-shadow: -2px 2px 4px #888888;
        display: none;
        .arrow{
          width: 34px;
          height: 34px;
          transform: rotate(45deg);
          position:absolute;
          right: 43px;
          top: 0px;
          z-index:1;
          background-color:#fff;
        }
        ul{
          z-index:2;
          overflow-y: scroll;
          max-width:500px;
          max-height:500px;
          a{
            color:#222222;
            text-decoration: none;
            li{
              padding:15px 30px 15px 20px;
              font-size:14px;
              display:table;
              position: relative;
              border-bottom:1px solid #F0F3F5;
              &.new{
                background-color:rgba(229, 229, 229, 0.7);
                border-bottom:1px solid #Fff;
                .icon{
                  i{
                    color:rgba(59, 171, 149, 1);
                  }
                }
              }
              .icon{
                left:5px;
                position:absolute;
                top: 50%;
                transform: translateY(-50%);
                i{
                  font-size:8px;
                  line-height: normal;
                  float:left;
                  color:rgba(0,0,0,0.4);
                }
              }
              .notificationContent{
                line-height: 16px;
                span{
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }

  }
`
const logged = true
const items = [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0]
class Header extends Component {
  constructor(props) {
        super(props);
        this.state = {userDropDown:false, notifications:{notificationDropDown: false, isNewNotification:true}, showHeaderCategories:false}
        this.toggleUserDropDown = this.toggleUserDropDown.bind(this)
        this.toggleNotificationDropDown = this.toggleNotificationDropDown.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
   window.addEventListener('scroll', this.handleScroll);
  }
  toggleUserDropDown(){
    if(this.state.userDropDown === false){
      this.setState({...this.state, userDropDown: true, notifications:{...this.state.notifications, notificationDropDown: false}})
    }else{
      this.setState({...this.state, userDropDown: false})
    }
  }
  toggleNotificationDropDown(){
    if(this.state.notifications.notificationDropDown === false){
      this.setState({...this.state, notifications:{...this.state.notifications, notificationDropDown: true, isNewNotification: false}, userDropDown: false})
    }else{
      this.setState({...this.state, notifications:{...this.state.notifications, notificationDropDown: false, isNewNotification: false}})
    }
  }

  handleScroll(){
    //todo: browser compatibility document.body.scrollTop
    var el = document.getElementById('feedMain');
    var minPixel = el.offsetTop - 100;
    var maxPixel = minPixel + el.scrollHeight;
    var value = document.documentElement.scrollTop;
    var percent = (value - minPixel)/(maxPixel - minPixel);
    percent = Math.min(1,Math.max(percent, 0))*100;
    if(percent > 0){
      this.setState({...this.state, showHeaderCategories:true})
    }else{
      this.setState({...this.state, showHeaderCategories:false})
    }
  }
  render() {
    let navigation = <div></div>
    if(logged){
      navigation = <div className="navigationPanel">
        <div onClick={this.toggleNotificationDropDown} className="notifications">
          <div className="notificationDropDown" style={{opacity: (this.state.notifications.notificationDropDown === true ? "inherit" : "none")}}>
            <div className="arrow"></div>
            <ul>
              {items.map(item =>
                <Link to="">
                  <li className={item === 1 ? "new" : ""}>
                    <div className="icon">
                        <i class="fa fa-circle" aria-hidden="true"></i>
                    </div>
                    <div className="notificationContent">
                      <p><span>Elya Crow</span> i <span>5 innych uzytkownikow</span> skomentowalo twoj post w kategorii <span>wiersze</span></p>
                    </div>
                  </li>
                </Link>
              )}
            </ul>
          </div>
          <div className={(this.state.notifications.isNewNotification === true ? "new" : "") + " notificationBell"}>
            <i className="fa fa-bell" aria-hidden="true"></i>
            <div className="count">14</div>
          </div>
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
            <Categories style={{display: (this.state.showHeaderCategories === false ? "none" : "inherit")}}>
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
