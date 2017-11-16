'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./App.js');

var _App2 = _interopRequireDefault(_App);

var _container = require('./container.js');

var _container2 = _interopRequireDefault(_container);

var _custom = require('./custom.js');

var _custom2 = _interopRequireDefault(_custom);

var _main = require('../src/home/main.js');

var _main2 = _interopRequireDefault(_main);

var _notFound = require('../src/shared/notFound.js');

var _notFound2 = _interopRequireDefault(_notFound);

var _login = require('../src/login/login.js');

var _login2 = _interopRequireDefault(_login);

var _register = require('../src/register/register.js');

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = exports.Routes = function Routes() {

  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.browserHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: _App2.default },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _main2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/category/:category', component: _main2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/custom', component: _custom2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/container', component: _container2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _login2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/register', component: _register2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: _notFound2.default })
    )
  );
};