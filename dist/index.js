'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  background-color: red;\n  padding: 100px;\n'], ['\n  background-color: red;\n  padding: 100px;\n']);

var Container = styled.div(_templateObject);

var Button = function (_Component) {
  inherits(Button, _Component);

  function Button() {
    classCallCheck(this, Button);
    return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  createClass(Button, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        Container,
        null,
        React__default.createElement(
          'button',
          null,
          'Test'
        )
      );
    }
  }]);
  return Button;
}(React.Component);

var ReadMore = function (_Component) {
  inherits(ReadMore, _Component);

  function ReadMore() {
    classCallCheck(this, ReadMore);
    return possibleConstructorReturn(this, (ReadMore.__proto__ || Object.getPrototypeOf(ReadMore)).apply(this, arguments));
  }

  createClass(ReadMore, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'button',
        null,
        'Test'
      );
    }
  }]);
  return ReadMore;
}(React.Component);

exports.Button = Button;
exports.ReadMore = ReadMore;
//# sourceMappingURL=index.js.map
