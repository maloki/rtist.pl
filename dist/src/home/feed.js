'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width:70%;\n  display:inline-block;\n  .feedItem{\n    width:100%;\n    min-height: 400px;\n    max-height:400px;\n    padding-bottom:30px;\n    background-color:#fff;\n    box-shadow: 2px 2px 2px #888888;\n    position:relative;\n    overflow: hidden;\n      margin-bottom:30px;\n    &.showFull{\n      max-height:unset;\n      .showFullOverlay{\n        display:none;\n      }\n    }\n    .showFullOverlay{\n      position:absolute;\n      bottom:0;\n      left:0;\n      width:100%;\n      height:40px;\n      background-color: rgba(255,255,255,0.7);\n      text-align:center;\n      button{\n        position:relative;\n        margin:0 auto;\n        background-color: rgba(240, 243, 245, 0.9);\n        font-family: \'Barlow\', sans-serif;\n        border:none;\n        padding:3px 60px;\n        margin-top:6px;\n      }\n    }\n    .header{\n      overflow: hidden;\n      width:100%;\n      height: 45px;\n      background-color: #222222;\n      color:#fff;\n      .categories{\n        width:70%;\n        height: 100%;\n        overflow: hidden;\n        float:left;\n        .category{\n          color:rgb(59,171,149);\n          margin: 0 20px;\n          line-height: 45px;\n          font-size:20px;\n        }\n      }\n      .author{\n        width:30%;\n        float:right;\n        .name{\n          font-size:22px;\n          line-height: 45px;\n          float:right;\n          margin-right:20px;\n        }\n        .avatar{\n          float:right;\n          img{\n            width:45px;\n            height:45px;\n            border-left:2px solid rgba(59,171,149, 1);\n          }\n        }\n      }\n    }\n  }\n'], ['\n  width:70%;\n  display:inline-block;\n  .feedItem{\n    width:100%;\n    min-height: 400px;\n    max-height:400px;\n    padding-bottom:30px;\n    background-color:#fff;\n    box-shadow: 2px 2px 2px #888888;\n    position:relative;\n    overflow: hidden;\n      margin-bottom:30px;\n    &.showFull{\n      max-height:unset;\n      .showFullOverlay{\n        display:none;\n      }\n    }\n    .showFullOverlay{\n      position:absolute;\n      bottom:0;\n      left:0;\n      width:100%;\n      height:40px;\n      background-color: rgba(255,255,255,0.7);\n      text-align:center;\n      button{\n        position:relative;\n        margin:0 auto;\n        background-color: rgba(240, 243, 245, 0.9);\n        font-family: \'Barlow\', sans-serif;\n        border:none;\n        padding:3px 60px;\n        margin-top:6px;\n      }\n    }\n    .header{\n      overflow: hidden;\n      width:100%;\n      height: 45px;\n      background-color: #222222;\n      color:#fff;\n      .categories{\n        width:70%;\n        height: 100%;\n        overflow: hidden;\n        float:left;\n        .category{\n          color:rgb(59,171,149);\n          margin: 0 20px;\n          line-height: 45px;\n          font-size:20px;\n        }\n      }\n      .author{\n        width:30%;\n        float:right;\n        .name{\n          font-size:22px;\n          line-height: 45px;\n          float:right;\n          margin-right:20px;\n        }\n        .avatar{\n          float:right;\n          img{\n            width:45px;\n            height:45px;\n            border-left:2px solid rgba(59,171,149, 1);\n          }\n        }\n      }\n    }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width:70%;\n  font-size:20px;\n  margin:0 auto;\n  text-align: center;\n  margin-top:20px;\n  p{\n    margin-bottom:24px;\n    line-height: 30px;\n  }\n'], ['\n  width:70%;\n  font-size:20px;\n  margin:0 auto;\n  text-align: center;\n  margin-top:20px;\n  p{\n    margin-bottom:24px;\n    line-height: 30px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var Content = _styledComponents2.default.div(_templateObject2);

var Feed = function (_Component) {
  _inherits(Feed, _Component);

  function Feed() {
    _classCallCheck(this, Feed);

    return _possibleConstructorReturn(this, (Feed.__proto__ || Object.getPrototypeOf(Feed)).apply(this, arguments));
  }

  _createClass(Feed, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
          'div',
          { className: 'feedItem' },
          _react2.default.createElement(
            'div',
            { className: 'header' },
            _react2.default.createElement(
              'div',
              { className: 'categories' },
              _react2.default.createElement(
                'div',
                { className: 'category' },
                '#wiersz'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'author' },
              _react2.default.createElement(
                'div',
                { className: 'avatar' },
                _react2.default.createElement('img', { src: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p160x160/20664987_1075646799237375_8472224970695419406_n.jpg?oh=5418a82850feea53173d79c781165735&oe=5A617853' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'name' },
                'Niki Nikita'
              )
            )
          ),
          _react2.default.createElement(
            Content,
            null,
            _react2.default.createElement(
              'p',
              null,
              'Remember that piano',
              _react2.default.createElement('br', null),
              'So delightful unusual',
              _react2.default.createElement('br', null),
              'That classic sensation',
              _react2.default.createElement('br', null),
              'Sentimental confusion',
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement(
              'p',
              null,
              'Used to say',
              _react2.default.createElement('br', null),
              'I like Chopin',
              _react2.default.createElement('br', null),
              'Love me now and again',
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement(
              'p',
              null,
              'Rainy days never say goodbye',
              _react2.default.createElement('br', null),
              'To desire when we are together',
              _react2.default.createElement('br', null),
              'Rainy days growing in your eyes',
              _react2.default.createElement('br', null),
              'Tell me where\'s my way'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'showFullOverlay' },
            _react2.default.createElement(
              'button',
              null,
              'Wiecej'
            )
          )
        ),
        _react2.default.createElement('div', { className: 'feedItem' })
      );
    }
  }]);

  return Feed;
}(_react.Component);

exports.default = Feed;