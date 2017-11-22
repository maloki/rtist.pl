'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width:100%;\n  height:calc(40px + 4px);\n  background-color:#F0F3F5;\n  border-bottom:4px solid #3BAB95;\n  padding:0 100px;\n  color:#222222;\n  position:fixed;\n  top:0;\n  left:0;\n  z-index: 99;\n'], ['\n  width:100%;\n  height:calc(40px + 4px);\n  background-color:#F0F3F5;\n  border-bottom:4px solid #3BAB95;\n  padding:0 100px;\n  color:#222222;\n  position:fixed;\n  top:0;\n  left:0;\n  z-index: 99;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  line-height: 40px;\n  float:left;\n  font-size: 32px;\n  a{\n    color:#222222;\n    text-decoration: none;\n  }\n'], ['\n  line-height: 40px;\n  float:left;\n  font-size: 32px;\n  a{\n    color:#222222;\n    text-decoration: none;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  ul{\n    text-align: center;\n    a{\n      color:#222222;\n    }\n    li{\n      display:inline-block;\n      margin-right:10px;\n      padding: 0px 12px;\n      line-height: 40px;\n      &:hover{\n        font-weight: bold;\n      }\n      &.active{\n        font-weight: bold;\n      }\n    }\n  }\n'], ['\n  ul{\n    text-align: center;\n    a{\n      color:#222222;\n    }\n    li{\n      display:inline-block;\n      margin-right:10px;\n      padding: 0px 12px;\n      line-height: 40px;\n      &:hover{\n        font-weight: bold;\n      }\n      &.active{\n        font-weight: bold;\n      }\n    }\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  float:right;\n  ul{\n    position: relative;\n    .box{\n      display: inline-block;\n      position: relative;\n      margin-right: 19px;\n      &.second{\n        margin-right: 0;\n      }\n      .top-line{\n        background-color: #3BAB95;\n        width:100%;\n        height:2px;\n        position: absolute;\n        top:4px;\n      }\n      a{\n        color:#222222;\n      }\n      li{\n        display: inline-block;\n        text-decoration: none;\n        list-style: none;\n        padding: 0px 4px;\n      }\n    }\n    .line{\n      display: inline-block;\n      -ms-transform: rotate(132deg);\n      -webkit-transform: rotate(20deg);\n      transform: rotate(118deg);\n      width: 40px;\n      height: 2px;\n      background-color: #3BAB95;\n      position: absolute;\n      left: 72px;\n      top: 22px;\n    }\n  }\n  .navigationPanel{\n    position: relative;\n    .user{\n      margin-top:6px;\n      cursor:pointer;\n      float:right;\n      .userDropDown{\n        background-color:#fff;\n        position:fixed;\n        top:44px;\n        width:inherit;\n        display: none;\n        right:62px;\n        .arrow{\n          width: 34px;\n          height: 34px;\n          transform: rotate(45deg);\n          position:absolute;\n          left: 38px;\n          top: 0px;\n          z-index:1;\n          background-color:#fff;\n        }\n        ul{\n          z-index:1;\n          a{\n            color:#222222;\n            li{\n              padding:20px 24px;\n              border-bottom:1px solid #F0F3F5;\n              &:hover{\n                background-color: rgba(0, 0, 0, 0.1);\n                -webkit-transition: background-color 0.2s ease-in-out;\n                -ms-transition:     background-color 0.2s ease-in-out;\n                transition:         background-color 0.2s ease-in-out;\n              }\n              .icon{\n                display: inline-block;\n              }\n              .text{\n                display: inline-block;\n                margin-left:10px;\n              }\n            }\n          }\n        }\n      }\n      img{\n        border-radius:50%;\n        height:30px;\n        width:30px;\n        border:2px solid #3BAB95;\n      }\n    }\n    .notifications{\n      float:left;\n      position: relative;\n      margin-right: 20px;\n      margin-top:2px;\n      cursor: pointer;\n    .notificationBell{\n      &.new{\n        .count{\n          display:inherit;\n        }\n        i{\n          color:#FA3E3E;\n        }\n      }\n      .count{\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top:-1px;\n        color:#fff;\n        font-size:12px;\n        text-align:center;\n        line-height: 40px;\n        display:none;\n      }\n      i{\n        font-size:20px;\n        color:rgba(0,0,0,0.6);\n        font-weight: bold;\n        line-height: 40px;\n      }\n    }\n      .notificationDropDown{\n        position:fixed;\n        top:44px;\n        background-color:#fff; \n        right:100px;\n        box-shadow: -2px 2px 4px #888888;\n        display: none;\n        .arrow{\n          width: 34px;\n          height: 34px;\n          transform: rotate(45deg);\n          position:absolute;\n          right: 43px;\n          top: 0px;\n          z-index:1;\n          background-color:#fff;\n        }\n        ul{\n          z-index:2;\n          overflow-y: scroll;\n          max-width:500px;\n          max-height:500px;\n          a{\n            color:#222222;\n            text-decoration: none;\n            li{\n              padding:15px 30px 15px 20px;\n              font-size:14px;\n              display:table;\n              position: relative;\n              border-bottom:1px solid #F0F3F5;\n              &.new{\n                background-color:rgba(229, 229, 229, 0.7);\n                border-bottom:1px solid #Fff;\n                .icon{\n                  i{\n                    color:rgba(59, 171, 149, 1);\n                  }\n                }\n              }\n              .icon{\n                left:5px;\n                position:absolute;\n                top: 50%;\n                transform: translateY(-50%);\n                i{\n                  font-size:8px;\n                  line-height: normal;\n                  float:left;\n                  color:rgba(0,0,0,0.4);\n                }\n              }\n              .notificationContent{\n                line-height: 16px;\n                span{\n                  font-weight: bold;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n\n  }\n'], ['\n  float:right;\n  ul{\n    position: relative;\n    .box{\n      display: inline-block;\n      position: relative;\n      margin-right: 19px;\n      &.second{\n        margin-right: 0;\n      }\n      .top-line{\n        background-color: #3BAB95;\n        width:100%;\n        height:2px;\n        position: absolute;\n        top:4px;\n      }\n      a{\n        color:#222222;\n      }\n      li{\n        display: inline-block;\n        text-decoration: none;\n        list-style: none;\n        padding: 0px 4px;\n      }\n    }\n    .line{\n      display: inline-block;\n      -ms-transform: rotate(132deg);\n      -webkit-transform: rotate(20deg);\n      transform: rotate(118deg);\n      width: 40px;\n      height: 2px;\n      background-color: #3BAB95;\n      position: absolute;\n      left: 72px;\n      top: 22px;\n    }\n  }\n  .navigationPanel{\n    position: relative;\n    .user{\n      margin-top:6px;\n      cursor:pointer;\n      float:right;\n      .userDropDown{\n        background-color:#fff;\n        position:fixed;\n        top:44px;\n        width:inherit;\n        display: none;\n        right:62px;\n        .arrow{\n          width: 34px;\n          height: 34px;\n          transform: rotate(45deg);\n          position:absolute;\n          left: 38px;\n          top: 0px;\n          z-index:1;\n          background-color:#fff;\n        }\n        ul{\n          z-index:1;\n          a{\n            color:#222222;\n            li{\n              padding:20px 24px;\n              border-bottom:1px solid #F0F3F5;\n              &:hover{\n                background-color: rgba(0, 0, 0, 0.1);\n                -webkit-transition: background-color 0.2s ease-in-out;\n                -ms-transition:     background-color 0.2s ease-in-out;\n                transition:         background-color 0.2s ease-in-out;\n              }\n              .icon{\n                display: inline-block;\n              }\n              .text{\n                display: inline-block;\n                margin-left:10px;\n              }\n            }\n          }\n        }\n      }\n      img{\n        border-radius:50%;\n        height:30px;\n        width:30px;\n        border:2px solid #3BAB95;\n      }\n    }\n    .notifications{\n      float:left;\n      position: relative;\n      margin-right: 20px;\n      margin-top:2px;\n      cursor: pointer;\n    .notificationBell{\n      &.new{\n        .count{\n          display:inherit;\n        }\n        i{\n          color:#FA3E3E;\n        }\n      }\n      .count{\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        top:-1px;\n        color:#fff;\n        font-size:12px;\n        text-align:center;\n        line-height: 40px;\n        display:none;\n      }\n      i{\n        font-size:20px;\n        color:rgba(0,0,0,0.6);\n        font-weight: bold;\n        line-height: 40px;\n      }\n    }\n      .notificationDropDown{\n        position:fixed;\n        top:44px;\n        background-color:#fff; \n        right:100px;\n        box-shadow: -2px 2px 4px #888888;\n        display: none;\n        .arrow{\n          width: 34px;\n          height: 34px;\n          transform: rotate(45deg);\n          position:absolute;\n          right: 43px;\n          top: 0px;\n          z-index:1;\n          background-color:#fff;\n        }\n        ul{\n          z-index:2;\n          overflow-y: scroll;\n          max-width:500px;\n          max-height:500px;\n          a{\n            color:#222222;\n            text-decoration: none;\n            li{\n              padding:15px 30px 15px 20px;\n              font-size:14px;\n              display:table;\n              position: relative;\n              border-bottom:1px solid #F0F3F5;\n              &.new{\n                background-color:rgba(229, 229, 229, 0.7);\n                border-bottom:1px solid #Fff;\n                .icon{\n                  i{\n                    color:rgba(59, 171, 149, 1);\n                  }\n                }\n              }\n              .icon{\n                left:5px;\n                position:absolute;\n                top: 50%;\n                transform: translateY(-50%);\n                i{\n                  font-size:8px;\n                  line-height: normal;\n                  float:left;\n                  color:rgba(0,0,0,0.4);\n                }\n              }\n              .notificationContent{\n                line-height: 16px;\n                span{\n                  font-weight: bold;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n\n  }\n']);

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
var logged = true;
var items = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = { userDropDown: false, notifications: { notificationDropDown: false, isNewNotification: true } };
    _this.toggleUserDropDown = _this.toggleUserDropDown.bind(_this);
    _this.toggleNotificationDropDown = _this.toggleNotificationDropDown.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'toggleUserDropDown',
    value: function toggleUserDropDown() {
      if (this.state.userDropDown === false) {
        this.setState(_extends({}, this.state, { userDropDown: true, notifications: _extends({}, this.state.notifications, { notificationDropDown: false }) }));
      } else {
        this.setState(_extends({}, this.state, { userDropDown: false }));
      }
    }
  }, {
    key: 'toggleNotificationDropDown',
    value: function toggleNotificationDropDown() {
      if (this.state.notifications.notificationDropDown === false) {
        this.setState(_extends({}, this.state, { notifications: _extends({}, this.state.notifications, { notificationDropDown: true, isNewNotification: false }), userDropDown: false }));
      } else {
        this.setState(_extends({}, this.state, { notifications: _extends({}, this.state.notifications, { notificationDropDown: false, isNewNotification: false }) }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var navigation = _react2.default.createElement('div', null);
      if (logged) {
        navigation = _react2.default.createElement(
          'div',
          { className: 'navigationPanel' },
          _react2.default.createElement(
            'div',
            { onClick: this.toggleNotificationDropDown, className: 'notifications' },
            _react2.default.createElement(
              'div',
              { className: 'notificationDropDown', style: { display: this.state.notifications.notificationDropDown === true ? "inherit" : "none" } },
              _react2.default.createElement('div', { className: 'arrow' }),
              _react2.default.createElement(
                'ul',
                null,
                items.map(function (item) {
                  return _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '' },
                    _react2.default.createElement(
                      'li',
                      { className: item === 1 ? "new" : "" },
                      _react2.default.createElement(
                        'div',
                        { className: 'icon' },
                        _react2.default.createElement('i', { 'class': 'fa fa-circle', 'aria-hidden': 'true' })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'notificationContent' },
                        _react2.default.createElement(
                          'p',
                          null,
                          _react2.default.createElement(
                            'span',
                            null,
                            'Elya Crow'
                          ),
                          ' i ',
                          _react2.default.createElement(
                            'span',
                            null,
                            '5 innych uzytkownikow'
                          ),
                          ' skomentowalo twoj post w kategorii ',
                          _react2.default.createElement(
                            'span',
                            null,
                            'wiersze'
                          )
                        )
                      )
                    )
                  );
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: (this.state.notifications.isNewNotification === true ? "new" : "") + " notificationBell" },
              _react2.default.createElement('i', { className: 'fa fa-bell', 'aria-hidden': 'true' }),
              _react2.default.createElement(
                'div',
                { className: 'count' },
                '14'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { onClick: this.toggleUserDropDown, className: 'user' },
            _react2.default.createElement('img', { align: 'middle', alt: 'todo:userName', src: 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-1/p160x160/23319229_746519135539751_473331122454521903_n.jpg?oh=8e5fd7576743b98f36e76d24edc4e737&oe=5AAD5B36' }),
            _react2.default.createElement(
              'div',
              { className: 'userDropDown', style: { display: this.state.userDropDown === true ? "inherit" : "none" } },
              _react2.default.createElement('div', { className: 'arrow' }),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: 'settings' },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'div',
                      { className: 'icon' },
                      _react2.default.createElement('i', { className: 'fa fa-user', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'text' },
                      'Profil'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: 'settings' },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'div',
                      { className: 'icon' },
                      _react2.default.createElement('i', { 'class': 'fa fa-user', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'text' },
                      'Profil'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: 'settings' },
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'div',
                      { className: 'icon' },
                      _react2.default.createElement('i', { 'class': 'fa fa-user', 'aria-hidden': 'true' })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'text' },
                      'Profil'
                    )
                  )
                )
              )
            )
          )
        );
      } else {
        navigation = _react2.default.createElement(
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
        );
      }
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
            navigation
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