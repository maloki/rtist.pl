import React from 'react'
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router'
import App from './App.js'
import Container from './container.js'
import Custom from './custom.js'
import Home from '../src/home/main.js'
import NotFound from '../src/shared/notFound.js'

export const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/custom" component={Custom} />
        <Route path="/container" component={Container} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router> 
  )
}
