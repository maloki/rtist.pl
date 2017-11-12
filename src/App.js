import React, { Component } from 'react';
import Header from './shared/header.js'
import styled from 'styled-components'

const Wrapper = styled.div`

`
const Content = styled.div`
  margin-top:calc(40px + 4px);

`

class App extends Component {
  render() {
    return (
        <Wrapper>
          <Header />
          <Content>
            {this.props.children}
          </Content>
        </Wrapper>

    );
  }
}

export default App
