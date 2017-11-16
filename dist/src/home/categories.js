'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  margin-top:30px;\n  ul{\n    text-align: center;\n    margin: 0 auto;\n    display: table;\n    margin: 0 auto;\n    padding-bottom: 14px;\n    a{\n      color:#222222;\n    }\n    li{\n      display: inline-block;\n      padding:0 15px 14px 15px;\n      border-bottom:2px solid rgba(59,171,149, 0.3);\n      font-size:14px;\n      &:hover{\n        font-weight: bold;\n        border-bottom:2px solid rgba(59,171,149, 0.6);\n      }\n      &.last {\n        margin-right: 0;\n      }\n      &.active{\n        border-bottom:2px solid rgba(59,171,149, 1);\n        .categoryName{\n          font-weight: bold;\n        }\n      }\n      .icon{\n        width:32px;\n        height:32px;\n        margin:0 auto;\n        background-size: contain;\n      }\n      .categoryName{\n        margin-top:10px;\n      }\n      .all{\n        background-image: url(\'static/icons/category-all.svg\');\n      }\n      .poem{\n        background-image: url(\'static/icons/category-poem.svg\');\n      }\n      .book{\n        background-image: url(\'static/icons/category-book.svg\');\n      }\n      .image{\n        background-image: url(\'static/icons/category-image.svg\');\n      }\n      .music{\n        background-image: url(\'static/icons/category-music.svg\');\n      }\n      .spray{\n        background-image: url(\'static/icons/category-spray.svg\');\n      }\n    }\n  }\n'], ['\n  margin-top:30px;\n  ul{\n    text-align: center;\n    margin: 0 auto;\n    display: table;\n    margin: 0 auto;\n    padding-bottom: 14px;\n    a{\n      color:#222222;\n    }\n    li{\n      display: inline-block;\n      padding:0 15px 14px 15px;\n      border-bottom:2px solid rgba(59,171,149, 0.3);\n      font-size:14px;\n      &:hover{\n        font-weight: bold;\n        border-bottom:2px solid rgba(59,171,149, 0.6);\n      }\n      &.last {\n        margin-right: 0;\n      }\n      &.active{\n        border-bottom:2px solid rgba(59,171,149, 1);\n        .categoryName{\n          font-weight: bold;\n        }\n      }\n      .icon{\n        width:32px;\n        height:32px;\n        margin:0 auto;\n        background-size: contain;\n      }\n      .categoryName{\n        margin-top:10px;\n      }\n      .all{\n        background-image: url(\'static/icons/category-all.svg\');\n      }\n      .poem{\n        background-image: url(\'static/icons/category-poem.svg\');\n      }\n      .book{\n        background-image: url(\'static/icons/category-book.svg\');\n      }\n      .image{\n        background-image: url(\'static/icons/category-image.svg\');\n      }\n      .music{\n        background-image: url(\'static/icons/category-music.svg\');\n      }\n      .spray{\n        background-image: url(\'static/icons/category-spray.svg\');\n      }\n    }\n  }\n']);

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

var Wrapper = _styledComponents2.default.section(_templateObject);

var Categories = function (_Component) {
  _inherits(Categories, _Component);

  function Categories(props) {
    _classCallCheck(this, Categories);

    return _possibleConstructorReturn(this, (Categories.__proto__ || Object.getPrototypeOf(Categories)).call(this, props));
  }

  _createClass(Categories, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/category' },
            _react2.default.createElement(
              'li',
              { className: 'active' },
              _react2.default.createElement('div', { className: 'icon all' }),
              _react2.default.createElement(
                'div',
                { className: 'categoryName' },
                'Wszystkie'
              )
            )
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/category' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('div', { className: 'icon poem' }),
              _react2.default.createElement(
                'div',
                { className: 'categoryName' },
                'Wiersze'
              )
            )
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/category' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('div', { className: 'icon book' }),
              _react2.default.createElement(
                'div',
                { className: 'categoryName' },
                'Ksiazki'
              )
            )
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/category' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('div', { className: 'icon image' }),
              _react2.default.createElement(
                'div',
                { className: 'categoryName' },
                'Obrazy'
              )
            )
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/category' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('div', { className: 'icon spray' }),
              _react2.default.createElement(
                'div',
                { className: 'categoryName' },
                'Graffiti'
              )
            )
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/category' },
            _react2.default.createElement(
              'li',
              { className: 'last' },
              _react2.default.createElement('div', { className: 'icon music' }),
              _react2.default.createElement(
                'div',
                { className: 'categoryName' },
                'Muzyka'
              )
            )
          )
        )
      );
    }
  }]);

  return Categories;
}(_react.Component);

exports.default = Categories;