'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width:100%;\n  height:400px;\n  background-image: url("");\n  background-size:cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: relative;\n  .overlay{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left:0;\n    top:0;\n    background-color: rgba(0,0,0,0.3);\n    z-index: 1;\n    .imageBlock{\n      float:left;\n      background-color: black;\n      width:25%;\n      height: 100%;\n      background-size:cover;\n      background-repeat: no-repeat;\n      background-position: center;\n\n    }\n  }\n  .transition{\n    width:100%;\n    height:100%;\n    position: absolute;\n    top:0;\n    left:0;\n    background-size:cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    z-index: 0;\n  }\n  .text{\n    position: relative;\n    z-index: 2;\n    color:#fff;\n    h1{\n      padding-top:50px;\n      color:#fff;\n      font-size: 50px;\n      text-align: center;\n    }\n    p{\n      font-size:26px;\n      text-align: justify;\n      max-width: 70%;\n      margin: 0 auto;\n      margin-top:30px;\n    }\n  }\n'], ['\n  width:100%;\n  height:400px;\n  background-image: url("");\n  background-size:cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: relative;\n  .overlay{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left:0;\n    top:0;\n    background-color: rgba(0,0,0,0.3);\n    z-index: 1;\n    .imageBlock{\n      float:left;\n      background-color: black;\n      width:25%;\n      height: 100%;\n      background-size:cover;\n      background-repeat: no-repeat;\n      background-position: center;\n\n    }\n  }\n  .transition{\n    width:100%;\n    height:100%;\n    position: absolute;\n    top:0;\n    left:0;\n    background-size:cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    z-index: 0;\n  }\n  .text{\n    position: relative;\n    z-index: 2;\n    color:#fff;\n    h1{\n      padding-top:50px;\n      color:#fff;\n      font-size: 50px;\n      text-align: center;\n    }\n    p{\n      font-size:26px;\n      text-align: justify;\n      max-width: 70%;\n      margin: 0 auto;\n      margin-top:30px;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.section(_templateObject);
var imageList = ["http://bi.gazeta.pl/im/2b/8f/13/z20508971IER,Grafficiarze-z-calego-swiata--mnostwo-kolorow-i-do.jpg", "https://i.ytimg.com/vi/P5t6PfcKLjw/maxresdefault.jpg", "https://static1.squarespace.com/static/5478e7cae4b01fb132fc6629/t/56929d3b841aba578bf91fb0/1452449091738/iStock_000067471783_Large.jpg?format=1500w", "http://eskipaper.com/images/playing-violin-1.jpg", "https://www.hustleandgroove.com/wp-content/uploads/2017/02/write-your-book.jpg", "https://iso.500px.com/wp-content/uploads/2017/04/stock-photo-105082519.jpg"];
var imageBlocks = [];
var overlayWidth = 0;

var WelcomeMessage = function (_Component) {
  _inherits(WelcomeMessage, _Component);

  function WelcomeMessage(props) {
    _classCallCheck(this, WelcomeMessage);

    var _this = _possibleConstructorReturn(this, (WelcomeMessage.__proto__ || Object.getPrototypeOf(WelcomeMessage)).call(this, props));

    _this.state = { imageUrl: imageList[Math.floor(Math.random() * imageList.length)], overlay: { opacity: 0, backgroundImage: "" } };
    _this.switchImage = _this.switchImage.bind(_this);
    return _this;
  }

  _createClass(WelcomeMessage, [{
    key: 'switchImage',
    value: function switchImage() {
      var index = 0;
      setInterval(function () {
        if (index >= imageList.length) {
          index = 0;
        }
        var opacity = 0;
        var interv = setInterval(function () {
          if (opacity >= 1) {
            this.setState(_extends({}, this.state, { imageUrl: imageList[index], overlay: _extends({}, this.state.overlay, { opacity: 0 }) }));
            clearInterval(interv);
            index++;
          } else {
            opacity += 0.003;
            this.setState(_extends({}, this.state, { overlay: _extends({}, this.state.overlay, { opacity: opacity, backgroundImage: "url(" + imageList[index] + ")" }) }));
          }
        }.bind(this), 1);
      }.bind(this), 12000);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.switchImage();
      overlayWidth = this.refs.overlay.getBoundingClientRect().width;
      console.log(overlayWidth);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Wrapper,
        { style: { backgroundImage: "url(" + this.state.imageUrl + ")" } },
        _react2.default.createElement('div', { className: 'overlay', ref: 'overlay' }),
        _react2.default.createElement('div', { className: 'transition', style: this.state.overlay }),
        _react2.default.createElement(
          'div',
          { className: 'text' },
          _react2.default.createElement(
            'h1',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Suspendisse aliquam diam vel enim porttitor suscipit. Sed sed lectus fermentum, elementum massa id, aliquam ex. Nunc commodo libero a urna dictum tincidunt. In condimentum nisl sit amet lacus lobortis, vel fermentum justo imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin id auctor orci. Sed ac faucibus mi. Ut tempus, ex non auctor varius, ex tortor mollis dolor, eget euismod eros tellus a metus. Curabitur aliquam sit amet dolor non ullamcorper.'
          )
        )
      );
    }
  }]);

  return WelcomeMessage;
}(_react.Component);

exports.default = WelcomeMessage;