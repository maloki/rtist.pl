'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position:absolute;\n  background-color:#fff;\n  height:600px;\n  width:calc(30% - 27px);\n  margin:0px 2px 0 25px;\n  top:0;\n  right:0;\n  color: #222222;\n  box-shadow: 2px 2px 2px #888888;\n'], ['\n  position:absolute;\n  background-color:#fff;\n  height:600px;\n  width:calc(30% - 27px);\n  margin:0px 2px 0 25px;\n  top:0;\n  right:0;\n  color: #222222;\n  box-shadow: 2px 2px 2px #888888;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding:10px;\n  h2{\n    text-align: center;\n    display: block;\n    font-size:19px;\n    margin-bottom:28px;\n  }\n  ul{\n    li{\n      margin-bottom:16px;\n      padding-bottom:10px;\n      border-bottom:1px solid #F0F3F5;\n      width:100%;\n      display: table;\n      line-height: 30px;\n      font-size:14px;\n      a{\n        color: #222222;\n      }\n      .user{\n        float:left;\n        .avatar{\n          float:left;\n          border-radius:10%;\n          height:30px;\n          position:relative;\n          .crown{\n            position:absolute;\n            top:-15px;\n            left:0px;\n            width:22px;\n            height:22px;\n            z-index: 2;\n            background-image: url(\'static/icons/leaderboard-crown.svg\');\n            background-size: contain;\n            background-repeat: no-repeat;\n            transform: rotate(-15deg);\n          }\n          img{\n            width:30px;\n            height:30px;\n            border-radius: 50%;\n            z-index: 1;\n            border:1px solid rgb(59,171,149);\n          }\n        } \n        .name{\n          float:left;\n          font-weight: bold;\n          margin-left:10px;\n        }\n      }\n      .score{\n        float:right;\n        .number{\n          float:left;\n        }\n        .unit{\n          margin-left:4px;\n          float:left;\n        }\n      }\n    }\n  }\n'], ['\n  padding:10px;\n  h2{\n    text-align: center;\n    display: block;\n    font-size:19px;\n    margin-bottom:28px;\n  }\n  ul{\n    li{\n      margin-bottom:16px;\n      padding-bottom:10px;\n      border-bottom:1px solid #F0F3F5;\n      width:100%;\n      display: table;\n      line-height: 30px;\n      font-size:14px;\n      a{\n        color: #222222;\n      }\n      .user{\n        float:left;\n        .avatar{\n          float:left;\n          border-radius:10%;\n          height:30px;\n          position:relative;\n          .crown{\n            position:absolute;\n            top:-15px;\n            left:0px;\n            width:22px;\n            height:22px;\n            z-index: 2;\n            background-image: url(\'static/icons/leaderboard-crown.svg\');\n            background-size: contain;\n            background-repeat: no-repeat;\n            transform: rotate(-15deg);\n          }\n          img{\n            width:30px;\n            height:30px;\n            border-radius: 50%;\n            z-index: 1;\n            border:1px solid rgb(59,171,149);\n          }\n        } \n        .name{\n          float:left;\n          font-weight: bold;\n          margin-left:10px;\n        }\n      }\n      .score{\n        float:right;\n        .number{\n          float:left;\n        }\n        .unit{\n          margin-left:4px;\n          float:left;\n        }\n      }\n    }\n  }\n']);

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
var LeaderBoard = _styledComponents2.default.div(_templateObject2);

var SideContent = function (_Component) {
  _inherits(SideContent, _Component);

  function SideContent() {
    _classCallCheck(this, SideContent);

    return _possibleConstructorReturn(this, (SideContent.__proto__ || Object.getPrototypeOf(SideContent)).apply(this, arguments));
  }

  _createClass(SideContent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
          LeaderBoard,
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Najwyzej oceniani uzytkownicy:'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: 'userPath' },
                _react2.default.createElement(
                  'div',
                  { className: 'user' },
                  _react2.default.createElement(
                    'div',
                    { className: 'avatar' },
                    _react2.default.createElement('div', { className: 'crown' }),
                    _react2.default.createElement('img', { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Kazimierz_Panu%C5%9B.jpg/195px-Kazimierz_Panu%C5%9B.jpg' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    'Elya Crow'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'score' },
                _react2.default.createElement(
                  'div',
                  { className: 'number' },
                  '2137'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'unit' },
                  'pkt'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: 'userPath' },
                _react2.default.createElement(
                  'div',
                  { className: 'user' },
                  _react2.default.createElement(
                    'div',
                    { className: 'avatar' },
                    _react2.default.createElement('img', { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Kazimierz_Panu%C5%9B.jpg/195px-Kazimierz_Panu%C5%9B.jpg' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    'Elya Crow'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'score' },
                _react2.default.createElement(
                  'div',
                  { className: 'number' },
                  '2137'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'unit' },
                  'pkt'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                _reactRouter.Link,
                { to: 'userPath' },
                _react2.default.createElement(
                  'div',
                  { className: 'user' },
                  _react2.default.createElement(
                    'div',
                    { className: 'avatar' },
                    _react2.default.createElement('img', { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Kazimierz_Panu%C5%9B.jpg/195px-Kazimierz_Panu%C5%9B.jpg' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name' },
                    'Elya Crow'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'score' },
                _react2.default.createElement(
                  'div',
                  { className: 'number' },
                  '2137'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'unit' },
                  'pkt'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SideContent;
}(_react.Component);

exports.default = SideContent;