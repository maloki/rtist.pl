'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = require('./routes.js');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const store = createStoreWithMiddleware(reducers, mergedState);

_reactDom2.default.render(_react2.default.createElement(_routes.Routes, null), document.getElementById('root'));