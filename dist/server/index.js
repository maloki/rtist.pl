'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _babelCore = require('babel-core');

var _babelCore2 = _interopRequireDefault(_babelCore);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('../src/routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _App = require('../src/App.js');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);
app.use(_express2.default.static('public'));

app.get('*', function (req, res, url) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, ssrData) {
    var ReactApp = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, ssrData));
    var RenderedApp = renderFullPage(ReactApp);
    res.send(RenderedApp);
  });
});

function renderFullPage(html) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <title>Rtist - portal dla artystow</title>\n        <link href="https://fonts.googleapis.com/css?family=Barlow" rel="stylesheet">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />\n        <link rel="stylesheet" href="/styles/styles.css" />\n      </head>\n      <body>\n        <style>\n        </style>\n        <div id="root">\n          <div class="container-fluid"><div>' + html + '</div></div>\n        </div>\n         <script src="/public/bundle.js"></script>\n      </body>\n    </html>\n    ';
}
app.server.listen(process.env.PORT || 3000);
console.log("listening");