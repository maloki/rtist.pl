import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router'

const Wrapper = styled.div`
  position:absolute;
  background-color:#fff;
  height:600px;
  width:calc(30% - 27px);
  margin:0px 2px 0 25px;
  top:0;
  right:0;
  color: #222222;
  box-shadow: 2px 2px 2px #888888;
`
const LeaderBoard = styled.div`
  padding:10px;
  h2{
    text-align: center;
    display: block;
    font-size:19px;
    margin-bottom:28px;
  }
  ul{
    li{
      margin-bottom:16px;
      padding-bottom:10px;
      border-bottom:1px solid #F0F3F5;
      width:100%;
      display: table;
      line-height: 30px;
      font-size:14px;
      a{
        color: #222222;
      }
      .user{
        float:left;
        .avatar{
          float:left;
          border-radius:10%;
          height:30px;
          position:relative;
          .crown{
            position:absolute;
            top:-15px;
            left:0px;
            width:22px;
            height:22px;
            z-index: 2;
            background-image: url('static/icons/leaderboard-crown.svg');
            background-size: contain;
            background-repeat: no-repeat;
            transform: rotate(-15deg);
          }
          img{
            width:30px;
            height:30px;
            border-radius: 50%;
            z-index: 1;
            border:1px solid rgb(59,171,149);
          }
        } 
        .name{
          float:left;
          font-weight: bold;
          margin-left:10px;
        }
      }
      .score{
        float:right;
        .number{
          float:left;
        }
        .unit{
          margin-left:4px;
          float:left;
        }
      }
    }
  }
`

class SideContent extends Component {
  render() {
    return (
        <Wrapper>
           <LeaderBoard>
             <h2>Najwyzej oceniani uzytkownicy:</h2>
             <ul>
               <li>
                 <Link to="userPath">
                   <div className="user">
                     <div className="avatar">
                       <div className="crown"></div>
                       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Kazimierz_Panu%C5%9B.jpg/195px-Kazimierz_Panu%C5%9B.jpg"></img>
                     </div>
                     <div className="name">Elya Crow</div>
                   </div>
                 </Link>
                 <div className="score">
                    <div className="number">2137</div>
                    <div className="unit">pkt</div>
                 </div>
               </li>
               <li>
                 <Link to="userPath">
                   <div className="user">
                     <div className="avatar">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Kazimierz_Panu%C5%9B.jpg/195px-Kazimierz_Panu%C5%9B.jpg"></img>
                     </div>
                     <div className="name">Elya Crow</div>
                   </div>
                 </Link>
                 <div className="score">
                    <div className="number">2137</div>
                    <div className="unit">pkt</div>
                 </div>
               </li>
               <li>
                 <Link to="userPath">
                   <div className="user">
                     <div className="avatar">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Kazimierz_Panu%C5%9B.jpg/195px-Kazimierz_Panu%C5%9B.jpg"></img>
                     </div>
                     <div className="name">Elya Crow</div>
                   </div>
                 </Link>
                 <div className="score">
                    <div className="number">2137</div>
                    <div className="unit">pkt</div>
                 </div>
               </li>
             </ul>
           </LeaderBoard>
        </Wrapper>
    );
  }
}

export default SideContent;
