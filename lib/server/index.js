import React from 'react'
import register from 'babel-core'
import http from 'http'
import path from 'path'
import fs from 'fs'
import express from 'express';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../src/routes.js'
import App from '../src/App.js'


const app = express()
app.server = http.createServer(app)
app.use(express.static('public'))

app.get('*', (req, res, url) => {
      match({routes: routes, location: req.url}, (err, redirect, ssrData) => {
          const ReactApp = renderToString(React.createElement(RouterContext, ssrData))
          const RenderedApp = renderFullPage(ReactApp)
          res.send(RenderedApp)
      })
})

function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Rtist - portal dla artystow</title>
        <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body>
        <style>
        </style>
        <div id="root">
          <div class="container-fluid"><div>${html}</div></div>
        </div>
         <script src="/public/bundle.js"></script>
      </body>
    </html>
    `
}
app.server.listen(process.env.PORT || 3000)
console.log("listening")
