import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width:60%;
  margin-right:45px;
  display:inline-block;
  margin-top:50px;
  .feedItem{
    margin-top:30px;
    width:100%;
    min-height: 400px;
    max-height:400px;
    padding-bottom:30px;
    background-color:#fff;
    box-shadow: 2px 2px 2px #888888;
    position:relative;
    overflow: hidden;
    &.showFull{
      max-height:unset; 
      .showFullOverlay{
        display:none;
      }
    }
    .showFullOverlay{
      position:absolute;
      bottom:0;
      left:0;
      width:100%;
      height:40px;
      background-color: rgba(255,255,255,0.7);
      text-align:center;
      button{
        position:relative;
        margin:0 auto;
        background-color: rgba(240, 243, 245, 0.9);
        font-family: 'Barlow', sans-serif;
        border:none;
        padding:3px 60px;
        margin-top:6px;
      }
    }
    .header{
      overflow: hidden;
      width:100%;
      height: 45px;
      background-color: #222222;
      color:#fff;
      .categories{
        width:70%;
        height: 100%;
        overflow: hidden;
        float:left;
        .category{
          color:rgb(59,171,149);
          margin: 0 20px;
          line-height: 45px;
          font-size:20px;
        }
      }
      .author{
        width:30%;
        float:right;
        .name{
          font-size:22px;
          line-height: 45px;
          float:right;
          margin-right:20px;
        }
        .avatar{
          float:right;
          img{
            width:45px;
            height:45px;
            border-left:2px solid rgba(59,171,149, 1);
          }
        }
      }
    }
  }
`

const Content = styled.div`
  width:70%;
  font-size:20px;
  margin:0 auto;
  text-align: center;
  margin-top:20px;
  p{
    margin-bottom:24px;
    line-height: 30px;
  }
`

class Feed extends Component {
  render() {
    return (
      <Wrapper>
        <div className="feedItem">

          <div className="header">
            <div className="categories">
              <div className="category">#wiersz</div>
            </div>
            <div className="author">
              <div className="avatar">
                <img src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p160x160/20664987_1075646799237375_8472224970695419406_n.jpg?oh=5418a82850feea53173d79c781165735&oe=5A617853"></img>
              </div>
              <div className="name">
                Niki Nikita
              </div>
            </div>
          </div>
          <Content>
            <p>Remember that piano
              <br></br>
                So delightful unusual
                <br></br>
                That classic sensation
                <br></br>
                Sentimental confusion
                <br></br>
              </p>
                <p>
                  Used to say
                  <br></br>
                  I like Chopin
                  <br></br>
                  Love me now and again
                  <br></br>
                </p>
                <p>
                  Rainy days never say goodbye
                  <br></br>
                  To desire when we are together
                  <br></br>
                  Rainy days growing in your eyes
                  <br></br>
                  Tell me where's my way
                </p>
          </Content>
          <div className="showFullOverlay">
            <button>Wiecej</button>
          </div>
        </div>
        <div className="feedItem">
        </div>
      </Wrapper>
    );
  }
}

export default Feed;
