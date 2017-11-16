'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginLogo = exports.LoginContainer = exports.Input = exports.LoginBackground = exports.HeaderFix = exports.ContainerNarrow = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\n'], ['\n\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-top:calc(40px + 4px)\n'], ['\n  margin-top:calc(40px + 4px)\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width:100%;\n  height:100%;\n  background-color: #F0F3F5;\n  position: relative;\n'], ['\n  width:100%;\n  height:100%;\n  background-color: #F0F3F5;\n  position: relative;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width:100%;\n  height:100%;\n  input{\n    width:100%;\n    border:none;\n    background-color: #fff;\n    margin-top:24px;\n    padding:18px 0px 18px 10px;\n    outline: none;\n    &.active{\n      border-left:4px solid #3BAB95;\n    }\n  }\n'], ['\n  width:100%;\n  height:100%;\n  input{\n    width:100%;\n    border:none;\n    background-color: #fff;\n    margin-top:24px;\n    padding:18px 0px 18px 10px;\n    outline: none;\n    &.active{\n      border-left:4px solid #3BAB95;\n    }\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width:20%;\n  height:100%;\n  margin: 0 auto;\n  margin-top:200px;\n  h2{\n    text-align:center;\n    font-size:20px;\n  }\n  button{\n    width:100%;\n    padding:15px 0;\n    background-color:#3BAB95;\n    color:#fff;\n    margin-top:24px;\n    &.facebook{\n      background-color:#3B5998;\n    }\n  }\n  .disclaimer{\n    font-size:12px;\n    text-align: center;\n    margin-top:20px;\n    color:#898B8C;\n  }\n  .or{\n    width:100%;\n    text-align:center;\n    margin-top:30px;\n    font-size:16px;\n  }\n  .alreadyRegistered{\n    width:100%;\n    color:#898B8C;\n    font-size:14px;\n    text-decoration:underline;\n    text-align:center;\n    display: block;\n    margin-top:24px;\n  }\n'], ['\n  width:20%;\n  height:100%;\n  margin: 0 auto;\n  margin-top:200px;\n  h2{\n    text-align:center;\n    font-size:20px;\n  }\n  button{\n    width:100%;\n    padding:15px 0;\n    background-color:#3BAB95;\n    color:#fff;\n    margin-top:24px;\n    &.facebook{\n      background-color:#3B5998;\n    }\n  }\n  .disclaimer{\n    font-size:12px;\n    text-align: center;\n    margin-top:20px;\n    color:#898B8C;\n  }\n  .or{\n    width:100%;\n    text-align:center;\n    margin-top:30px;\n    font-size:16px;\n  }\n  .alreadyRegistered{\n    width:100%;\n    color:#898B8C;\n    font-size:14px;\n    text-decoration:underline;\n    text-align:center;\n    display: block;\n    margin-top:24px;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n    width:100%;\n    a{\n      text-decoration: none;\n      color:#222222;\n    }\n    h1{\n      font-size:32px;\n      font-weight: 500;\n      line-height: 40px;\n      margin-left:100px;\n    }\n'], ['\n    width:100%;\n    a{\n      text-decoration: none;\n      color:#222222;\n    }\n    h1{\n      font-size:32px;\n      font-weight: 500;\n      line-height: 40px;\n      margin-left:100px;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerNarrow = exports.ContainerNarrow = _styledComponents2.default.section(_templateObject);

var HeaderFix = exports.HeaderFix = _styledComponents2.default.div(_templateObject2);

var LoginBackground = exports.LoginBackground = _styledComponents2.default.div(_templateObject3);

var Input = exports.Input = _styledComponents2.default.div(_templateObject4);

var LoginContainer = exports.LoginContainer = _styledComponents2.default.div(_templateObject5);

var LoginLogo = exports.LoginLogo = _styledComponents2.default.div(_templateObject6);