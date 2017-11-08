import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router'
import App from './App'
import Container from './container.js'
import Custom from './custom.js'

module.exports = (
  <div>
    <Route path="/" component={App} />
    <Route path="/custom" component={Custom} />
  </div>
)
