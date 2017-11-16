'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state, action) {
    switch (action.type) {
        case _types.TEST:
            return _extends({}, state, {
                test: action.payload
            });
    }

    return state;
};

var _types = require('../actions/types');