'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = require('react-router');

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var test = exports.test = function test() {
  return { type: _types.TEST, payload: "test working" };
};