import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`

`
const Content = styled.div`

`

class App extends Component {
  render() {
    return (
        <Wrapper>
          <Content>
            {this.props.children}
          </Content>
        </Wrapper>
    );
  }
}

export default App
