import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import  {Link} from 'react-router'

const Wrapper = styled.section`
  margin-top:30px;
  ul{
    text-align: center;
    margin: 0 auto;
    display: table;
    margin: 0 auto;
    padding-bottom: 14px;
    a{
      color:#222222;
    }
    li{
      display: inline-block;
      padding:0 15px 14px 15px;
      border-bottom:2px solid rgba(59,171,149, 0.3);
      font-size:20px;
      &:hover{
        font-weight: bold;
        border-bottom:2px solid rgba(59,171,149, 0.6);
      }
      &.last {
        margin-right: 0;
      }
      &.active{
        border-bottom:2px solid rgba(59,171,149, 1);
        .categoryName{
          font-weight: bold;
        }
      }
      .icon{
        width:32px;
        height:32px;
        margin:0 auto;
        background-size: contain;
      }
      .categoryName{
        margin-top:10px;
      }
      .all{
        background-image: url('static/icons/category-all.svg');
      }
      .poem{
        background-image: url('static/icons/category-poem.svg');
      }
      .book{
        background-image: url('static/icons/category-book.svg');
      }
      .image{
        background-image: url('static/icons/category-image.svg');
      }
      .music{
        background-image: url('static/icons/category-music.svg');
      }
      .spray{
        background-image: url('static/icons/category-spray.svg');
      }
    }
  }
`


class WelcomeMessage extends Component {
  render() {
    return (
      <Wrapper>
        <ul>
          <Link to="/category">
            <li className="active">
              <div className="icon all"></div>
              <div className="categoryName">Wszystkie</div>
            </li>
          </Link>
          <Link to="/category">
            <li>
              <div className="icon poem"></div>
              <div className="categoryName">Wiersze</div>
            </li>
          </Link>
          <Link to="/category">
            <li>
              <div className="icon book"></div>
              <div className="categoryName">Ksiazki</div>
            </li>
          </Link>
          <Link to="/category">
            <li>
              <div className="icon image"></div>
              <div className="categoryName">Obrazy</div>
            </li>
          </Link>
          <Link to="/category">
            <li>
              <div className="icon spray"></div>
              <div className="categoryName">Graffiti</div>
            </li>
          </Link>
          <Link to="/category">
            <li className="last">
              <div className="icon music"></div>
              <div className="categoryName">Muzyka</div>
            </li>
          </Link>
        </ul>
      </Wrapper>
    );
  }
}

export default WelcomeMessage;
