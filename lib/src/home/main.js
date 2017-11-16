import React, { Component } from 'react'
import styled from 'styled-components'
import WelcomeMessage from './welcomeMessage.js'
import Categories from './categories.js'
import Feed from './feed.js'
import Header from '../shared/header.js'
import { HeaderFix } from '../genericStyles/styled.js'
import SideContent from './sideContent.js'

const FeedWrapper = styled.section`
  width:100%;
  overflow: hidden;
  position:relative;
  margin-top:50px;
`

const ContainerNarrow = styled.div`
  width:50%;
  margin: 0 auto;
`

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <HeaderFix />
        <WelcomeMessage />
        <ContainerNarrow>
          <Categories />
          <FeedWrapper>
            <Feed />
            <SideContent />
          </FeedWrapper>
        </ContainerNarrow>
      </div>
    );
  }
}

export default Main;
