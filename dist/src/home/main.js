'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width:100%;\n  overflow: hidden;\n  position:relative;\n  margin-top:50px;\n'], ['\n  width:100%;\n  overflow: hidden;\n  position:relative;\n  margin-top:50px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width:50%;\n  margin: 0 auto;\n'], ['\n  width:50%;\n  margin: 0 auto;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _welcomeMessage = require('./welcomeMessage.js');

var _welcomeMessage2 = _interopRequireDefault(_welcomeMessage);

var _categories = require('./categories.js');

var _categories2 = _interopRequireDefault(_categories);

var _feed = require('./feed.js');

var _feed2 = _interopRequireDefault(_feed);

var _header = require('../shared/header.js');

var _header2 = _interopRequireDefault(_header);

var _styled = require('../genericStyles/styled.js');

var _sideContent = require('./sideContent.js');

var _sideContent2 = _interopRequireDefault(_sideContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FeedWrapper = _styledComponents2.default.section(_templateObject);

var ContainerNarrow = _styledComponents2.default.div(_templateObject2);

var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, null),
        _react2.default.createElement(_styled.HeaderFix, null),
        _react2.default.createElement(_welcomeMessage2.default, null),
        _react2.default.createElement(
          ContainerNarrow,
          null,
          _react2.default.createElement(_categories2.default, null),
          _react2.default.createElement(
            FeedWrapper,
            null,
            _react2.default.createElement(_feed2.default, null),
            _react2.default.createElement(_sideContent2.default, null)
          )
        )
      );
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;