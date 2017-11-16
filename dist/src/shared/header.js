'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width:100%;\n  height:calc(40px + 4px);\n  background-color:#F0F3F5;\n  overflow: hidden;\n  line-height: calc(40px + 4px);\n  border-bottom:4px solid #3BAB95;\n  padding:0 100px;\n  color:#222222;\n  position:fixed;\n  top:0;\n  left:0;\n  z-index: 99;\n'], ['\n  width:100%;\n  height:calc(40px + 4px);\n  background-color:#F0F3F5;\n  overflow: hidden;\n  line-height: calc(40px + 4px);\n  border-bottom:4px solid #3BAB95;\n  padding:0 100px;\n  color:#222222;\n  position:fixed;\n  top:0;\n  left:0;\n  z-index: 99;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  line-height: 40px;\n  float:left;\n  font-size: 32px;\n  a{\n    color:#222222;\n    text-decoration: none;\n  }\n'], ['\n  line-height: 40px;\n  float:left;\n  font-size: 32px;\n  a{\n    color:#222222;\n    text-decoration: none;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ul{\n    text-align: center;\n    a{\n      color:#222222;\n    }\n    li{\n      display:inline-block;\n      margin-right:10px;\n      padding: 0px 12px;\n      line-height: 40px;\n      &:hover{\n        font-weight: bold;\n      }\n      &.active{\n        font-weight: bold;\n      }\n    }\n  }\n'], ['\n  ul{\n    text-align: center;\n    a{\n      color:#222222;\n    }\n    li{\n      display:inline-block;\n      margin-right:10px;\n      padding: 0px 12px;\n      line-height: 40px;\n      &:hover{\n        font-weight: bold;\n      }\n      &.active{\n        font-weight: bold;\n      }\n    }\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  float:right;\n  ul{\n    position: relative;\n    .box{\n      display: inline-block;\n      position: relative;\n      margin-right: 19px;\n      &.second{\n        margin-right: 0;\n      }\n      .top-line{\n        background-color: #3BAB95;\n        width:100%;\n        height:2px;\n        position: absolute;\n        top:4px;\n      }\n      a{\n        color:#222222;\n      }\n      li{\n        display: inline-block;\n        text-decoration: none;\n        list-style: none;\n        padding: 0px 4px;\n      }\n    }\n    .line{\n      display: inline-block;\n      -ms-transform: rotate(132deg);\n      -webkit-transform: rotate(20deg);\n      transform: rotate(118deg);\n      width: 40px;\n      height: 2px;\n      background-color: #3BAB95;\n      position: absolute;\n      left: 72px;\n      top: 22px;\n    }\n  }\n'], ['\n  float:right;\n  ul{\n    position: relative;\n    .box{\n      display: inline-block;\n      position: relative;\n      margin-right: 19px;\n      &.second{\n        margin-right: 0;\n      }\n      .top-line{\n        background-color: #3BAB95;\n        width:100%;\n        height:2px;\n        position: absolute;\n        top:4px;\n      }\n      a{\n        color:#222222;\n      }\n      li{\n        display: inline-block;\n        text-decoration: none;\n        list-style: none;\n        padding: 0px 4px;\n      }\n    }\n    .line{\n      display: inline-block;\n      -ms-transform: rotate(132deg);\n      -webkit-transform: rotate(20deg);\n      transform: rotate(118deg);\n      width: 40px;\n      height: 2px;\n      background-color: #3BAB95;\n      position: absolute;\n      left: 72px;\n      top: 22px;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var Logo = _styledComponents2.default.div(_templateObject2);

var Categories = _styledComponents2.default.div(_templateObject3);

var Navigation = _styledComponents2.default.div(_templateObject4);

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          _react2.default.createElement(
            Logo,
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/' },
              _react2.default.createElement(
                'h1',
                null,
                'Rtist.pl'
              )
            )
          ),
          _react2.default.createElement(
            Navigation,
            null,
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'div',
                { className: 'box' },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/login' },
                  _react2.default.createElement(
                    'li',
                    null,
                    'Zaloguj sie'
                  )
                )
              ),
              _react2.default.createElement('div', { className: 'line' }),
              _react2.default.createElement(
                'div',
                { className: 'box second' },
                _react2.default.createElement('div', { className: 'top-line' }),
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/register' },
                  _react2.default.createElement(
                    'li',
                    null,
                    'Rejestracja'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            Categories,
            null,
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                _react2.default.createElement(
                  'li',
                  { className: 'active' },
                  'Wszystkie'
                )
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Wiersze'
                )
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Ksiazki'
                )
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Obrazy'
                )
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Graffiti'
                )
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                _react2.default.createElement(
                  'li',
                  null,
                  'Muzyka'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;