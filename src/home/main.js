import React, { Component } from 'react'
import styled from 'styled-components'
import WelcomeMessage from './welcomeMessage.js'
import Categories from './categories.js'
import Feed from './feed.js'

const FeedWrapper = styled.section`
  width:100%;
  overflow: hidden;
`

const ContainerNarrow = styled.div`
  width:80%;
  margin: 0 auto;
`

class Main extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage />
        <ContainerNarrow>
          <Categories />
          <FeedWrapper>
            <Feed />
          </FeedWrapper>
        </ContainerNarrow>

      </div>
    );
  }
}

export default Main;
