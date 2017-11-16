import React from 'react'
import ReactDOM from 'react-dom'
import { Routes } from './routes.js'
import reducers from './reducers';
//const store = createStoreWithMiddleware(reducers, mergedState);

ReactDOM.render(<Routes />,
  document.getElementById('root'))
