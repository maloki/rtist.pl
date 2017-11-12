import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const Wrapper = styled.section`
  width:100%;
  height:400px;
  background-image: url("");
  background-size:cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    left:0;
    top:0;
    background-color: rgba(0,0,0,0.3);
    z-index: 1;
    .imageBlock{
      float:left;
      background-color: black;
      width:25%;
      height: 100%;
      background-size:cover;
      background-repeat: no-repeat;
      background-position: center;

    }
  }
  .transition{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 0;
  }
  .text{
    position: relative;
    z-index: 2;
    color:#fff;
    h1{
      padding-top:50px;
      color:#fff;
      font-size: 50px;
      text-align: center;
    }
    p{
      font-size:26px;
      text-align: justify;
      max-width: 70%;
      margin: 0 auto;
      margin-top:30px;
    }
  }
`
const imageList = [
        "http://bi.gazeta.pl/im/2b/8f/13/z20508971IER,Grafficiarze-z-calego-swiata--mnostwo-kolorow-i-do.jpg",
        "https://i.ytimg.com/vi/P5t6PfcKLjw/maxresdefault.jpg",
        "https://static1.squarespace.com/static/5478e7cae4b01fb132fc6629/t/56929d3b841aba578bf91fb0/1452449091738/iStock_000067471783_Large.jpg?format=1500w",
        "http://eskipaper.com/images/playing-violin-1.jpg",
        "https://www.hustleandgroove.com/wp-content/uploads/2017/02/write-your-book.jpg",
        "https://iso.500px.com/wp-content/uploads/2017/04/stock-photo-105082519.jpg"


                  ]
let imageBlocks = []
let overlayWidth = 0;
class WelcomeMessage extends Component {
  constructor(props) {
        super(props);
        this.state = {imageUrl: imageList[Math.floor((Math.random() * imageList.length))], overlay: {opacity: 0, backgroundImage: ""}}
        this.switchImage = this.switchImage.bind(this)
  }
  switchImage(){
    let index = 0
    setInterval(function(){
      if(index >= imageList.length){
        index = 0
      }
      let opacity = 0;
      let interv = setInterval(function(){
        if(opacity >= 1){
          this.setState({...this.state, imageUrl: imageList[index], overlay:{...this.state.overlay, opacity:0}})
          clearInterval(interv)
          index++
        }else{
          opacity += 0.003;
          this.setState({...this.state, overlay:{...this.state.overlay, opacity: opacity, backgroundImage: "url(" + imageList[index] + ")"}})
        }
      }.bind(this), 1)
    }.bind(this), 12000)
  }
  componentDidMount(){
    this.switchImage()
    overlayWidth = this.refs.overlay.getBoundingClientRect().width
    console.log(overlayWidth)
  }
  render() {
    return (
      <Wrapper style={{backgroundImage: "url("+ this.state.imageUrl +")"}}>
        <div className="overlay" ref="overlay"></div>
        <div className="transition" style={this.state.overlay}></div>
        <div className="text">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>Suspendisse aliquam diam vel enim porttitor suscipit. Sed sed lectus fermentum, elementum massa id, aliquam ex.
             Nunc commodo libero a urna dictum tincidunt. In condimentum nisl sit amet lacus lobortis, vel fermentum justo imperdiet.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin id auctor orci. Sed ac faucibus mi.
               Ut tempus, ex non auctor varius, ex tortor mollis dolor, eget euismod eros tellus a metus. Curabitur aliquam sit amet dolor non ullamcorper.
                </p>
        </div>
      </Wrapper>
    );
  }
}

export default WelcomeMessage;
