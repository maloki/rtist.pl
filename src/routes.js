import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router'
import App from './App'
import Container from './container.js'
import Custom from './custom.js'
import Home from '../src/home/main.js'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/custom" component={Custom} />
      <Route path="/container" component={Container} /> 
    </Route>
  </Router>
)
