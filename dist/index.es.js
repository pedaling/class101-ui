import styled, { css } from 'styled-components';
import React from 'react';

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  font-family: \'NanumSquare\';\n  font-size: 32px;\n  color: ', ';\n  line-height: 44px;\n  font-weight: bold;\n'], ['\n  font-family: \'NanumSquare\';\n  font-size: 32px;\n  color: ', ';\n  line-height: 44px;\n  font-weight: bold;\n']),
    _templateObject2 = taggedTemplateLiteral(['\n  font-family: \'NanumSquare\';\n  font-size: 24px;\n  color: ', ';\n  line-height: 34px;\n  font-weight: bold;\n'], ['\n  font-family: \'NanumSquare\';\n  font-size: 24px;\n  color: ', ';\n  line-height: 34px;\n  font-weight: bold;\n']),
    _templateObject3 = taggedTemplateLiteral(['\n  font-family: \'NanumSquare\';\n  font-size: 32px;\n  line-height: 44px;\n  font-weight: bold;\n  color: ', ';\n'], ['\n  font-family: \'NanumSquare\';\n  font-size: 32px;\n  line-height: 44px;\n  font-weight: bold;\n  color: ', ';\n']),
    _templateObject4 = taggedTemplateLiteral(['\n  font-size: 16px;\n  color: ', ';\n  line-height: 24px;\n'], ['\n  font-size: 16px;\n  color: ', ';\n  line-height: 24px;\n']),
    _templateObject5 = taggedTemplateLiteral(['\n  font-size: 14px;\n  color: ', ';\n  line-height: 20px;\n'], ['\n  font-size: 14px;\n  color: ', ';\n  line-height: 20px;\n']),
    _templateObject6 = taggedTemplateLiteral(['\n  color: ', ';\n  font-size: 11px;\n  font-weight: bold;\n  line-height: 16px;\n'], ['\n  color: ', ';\n  font-size: 11px;\n  font-weight: bold;\n  line-height: 16px;\n']),
    _templateObject7 = taggedTemplateLiteral(['\n  font-size: 16px;\n  font-weight: bold;\n  color: ', ';\n  line-height: 24px;\n'], ['\n  font-size: 16px;\n  font-weight: bold;\n  color: ', ';\n  line-height: 24px;\n']),
    _templateObject8 = taggedTemplateLiteral(['\n  font-size: 14px;\n  font-weight: bold;\n  color: ', ';\n  line-height: 20px;\n'], ['\n  font-size: 14px;\n  font-weight: bold;\n  color: ', ';\n  line-height: 20px;\n']),
    _templateObject9 = taggedTemplateLiteral(['\n  font-size: 20px;\n  font-weight: bold;\n  color: ', ';\n  line-height: 32px;\n'], ['\n  font-size: 20px;\n  font-weight: bold;\n  color: ', ';\n  line-height: 32px;\n']),
    _templateObject10 = taggedTemplateLiteral(['\n  font-size: 11px;\n  line-height: 16px;\n  color: ', ';\n'], ['\n  font-size: 11px;\n  line-height: 16px;\n  color: ', ';\n']),
    _templateObject11 = taggedTemplateLiteral(['\n  font-size: 9px;\n  line-height: 12px;\n'], ['\n  font-size: 9px;\n  line-height: 12px;\n']),
    _templateObject12 = taggedTemplateLiteral(['\n  font-size: 9px;\n  line-height: 12px;\n  color: ', ';\n'], ['\n  font-size: 9px;\n  line-height: 12px;\n  color: ', ';\n']),
    _templateObject13 = taggedTemplateLiteral(['\n  font-size: 16px;\n  font-weight: 300;\n  color: ', ';\n  line-height: 28px;\n'], ['\n  font-size: 16px;\n  font-weight: 300;\n  color: ', ';\n  line-height: 28px;\n']),
    _templateObject14 = taggedTemplateLiteral(['\n  font-family: \'NanumSquare\';\n  font-size: 18px;\n  color: ', ';\n  line-height: 28px;\n  font-weight: bold;\n'], ['\n  font-family: \'NanumSquare\';\n  font-size: 18px;\n  color: ', ';\n  line-height: 28px;\n  font-weight: bold;\n']),
    _templateObject15 = taggedTemplateLiteral(['\n  font-size: 11px;\n  color: ', ';\n  line-height: 16px;\n'], ['\n  font-size: 11px;\n  color: ', ';\n  line-height: 16px;\n']),
    _templateObject16 = taggedTemplateLiteral(['\n  font-family: \'NanumSquare\';\n  font-size: 24px;\n  color: ', ';\n  line-height: 34px;\n  font-weight: 800;\n'], ['\n  font-family: \'NanumSquare\';\n  font-size: 24px;\n  color: ', ';\n  line-height: 34px;\n  font-weight: 800;\n']),
    _templateObject17 = taggedTemplateLiteral(['\n  font-size: 20px;\n  color: ', ';\n  line-height: 32px;\n'], ['\n  font-size: 20px;\n  color: ', ';\n  line-height: 32px;\n']),
    _templateObject18 = taggedTemplateLiteral(['\n  font-size: 9px;\n  color: ', ';\n  line-height: 12px;\n'], ['\n  font-size: 9px;\n  color: ', ';\n  line-height: 12px;\n']),
    _templateObject19 = taggedTemplateLiteral(['\n  font-family: \'NanumSquare\';\n  font-size: 32px;\n  color: ', ';\n  line-height: 44px;\n  font-weight: 800;\n'], ['\n  font-family: \'NanumSquare\';\n  font-size: 32px;\n  color: ', ';\n  line-height: 44px;\n  font-weight: 800;\n']),
    _templateObject20 = taggedTemplateLiteral(['\n  font-family: \'NanumSquare\';\n  font-size: 18px;\n  color: ', ';\n  line-height: 28px;\n  font-weight: 800;\n'], ['\n  font-family: \'NanumSquare\';\n  font-size: 18px;\n  color: ', ';\n  line-height: 28px;\n  font-weight: 800;\n']),
    _templateObject21 = taggedTemplateLiteral(['\n  font-size: 11px;\n  font-weight: bold;\n  color: ', ';\n  line-height: 16px;\n'], ['\n  font-size: 11px;\n  font-weight: bold;\n  color: ', ';\n  line-height: 16px;\n']),
    _templateObject22 = taggedTemplateLiteral(['\n  font-size: 16px;\n  line-height: 28px;\n  color: ', ';\n'], ['\n  font-size: 16px;\n  line-height: 28px;\n  color: ', ';\n']),
    _templateObject23 = taggedTemplateLiteral(['\n  font-size: 14px;\n  font-weight: 300;\n  color: ', ';\n  line-height: 24px;\n'], ['\n  font-size: 14px;\n  font-weight: 300;\n  color: ', ';\n  line-height: 24px;\n']),
    _templateObject24 = taggedTemplateLiteral(['\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 24px;\n  color: ', ';\n'], ['\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 24px;\n  color: ', ';\n']),
    _templateObject25 = taggedTemplateLiteral(['\n  font-size: 9px;\n  font-weight: bold;\n  color: ', ';\n  line-height: 12px;\n'], ['\n  font-size: 9px;\n  font-weight: bold;\n  color: ', ';\n  line-height: 12px;\n']),
    _templateObject26 = taggedTemplateLiteral(['\n      @media ', ' {\n        ', '\n      }\n    '], ['\n      @media ', ' {\n        ', '\n      }\n    ']);

var white = '#FFF';
var gray800 = '#353a3c';
var gray700 = '#4c5256';
var gray600 = '#868c91';
var gray500 = '#a8aeb3';

var heading1BlackBold = css(_templateObject, gray800);

var heading2WhiteBold = css(_templateObject2, white);

var heading1WhiteBold = css(_templateObject3, white);

var body1Black = css(_templateObject4, gray800);

var body2Black = css(_templateObject5, gray800);

var body2White = css(_templateObject5, white);

var body2Gray = css(_templateObject5, gray500);

var tiny1WhiteBold = css(_templateObject6, white);

var body1WhiteBold = css(_templateObject7, white);

var body2BlackBold = css(_templateObject8, gray800);

var subheadingBlackBold = css(_templateObject9, gray800);

var tiny1Black = css(_templateObject10, gray800);

var tiny2Black = css(_templateObject11);

var tiny2White = css(_templateObject12, white);

var body1Body = css(_templateObject13, gray700);

var heading3BlackBold = css(_templateObject14, gray800);

var tiny1Gray = css(_templateObject15, gray500);

var heading2BlackExtraBold = css(_templateObject16, gray800);

var tiny1White = css(_templateObject10, white);

var heading3WhiteBold = css(_templateObject14, white);

var body1Gray = css(_templateObject4, gray500);

var body2WhiteBold = css(_templateObject8, white);

var body1BlackBold = css(_templateObject7, gray800);

var subheadingGray = css(_templateObject17, gray500);

var tiny2Gray = css(_templateObject18, gray500);

var heading1BlackExtraBold = css(_templateObject19, gray800);

var heading3BlackExtraBold = css(_templateObject20, gray800);

var subheadingWhiteBold = css(_templateObject9, white);

var tiny1BlackBold = css(_templateObject21, gray800);

var body1White = css(_templateObject4, white);

var body1Paragraph = css(_templateObject22, gray600);

var body2Body = css(_templateObject23, gray800);

var body2Paragraph = css(_templateObject24, gray700);

var heading3WhiteExtraBold = css(_templateObject20, white);

var heading2BlackBold = css(_templateObject2, gray800);

var tiny2WhiteBold = css(_templateObject25, white);

var heading1WhiteExtraBold = css(_templateObject19, white);

var body2GrayBold = css(_templateObject8, gray500);

var heading3GrayBold = css(_templateObject14, gray500);

var subheadingBlack = css(_templateObject17, gray700);

function buildMediaQuery(_ref, not) {
  var minWidth = _ref.minWidth,
      maxWidth = _ref.maxWidth;

  var query = '';

  if (minWidth) {
    query += '(min-width: ' + minWidth + 'px)';
  }

  if (minWidth && maxWidth) {
    query += ' and ';
  }

  if (maxWidth) {
    query += '(max-width: ' + maxWidth + 'px)';
  }

  if (not) {
    query = 'not all and ' + query;
  }

  return query;
}

var SIZES = {
  sm: { minWidth: null, maxWidth: 1023 },
  md: { minWidth: null, maxWidth: null }, // TODO: 태블릿 사이즈가 추가되면 수정합니다.
  lg: { minWidth: 1024, maxWidth: null }
};

var media = Object.keys(SIZES).reduce(function (acc, label) {
  acc[label] = function () {
    var mediaQuery = buildMediaQuery(SIZES[label]);
    return css(_templateObject26, mediaQuery, css.apply(undefined, arguments));
  };
  return acc;
}, {});

var _templateObject$1 = taggedTemplateLiteral(['\n  position: relative;\n  margin: 0 32px;\n  ', ';\n  ', ';\n'], ['\n  position: relative;\n  margin: 0 32px;\n  ', ';\n  ', ';\n']),
    _templateObject2$1 = taggedTemplateLiteral(['\n    margin: 0 24px;\n  '], ['\n    margin: 0 24px;\n  ']),
    _templateObject3$1 = taggedTemplateLiteral(['\n    max-width: ', ';\n  '], ['\n    max-width: ', ';\n  ']);

var Grid = styled.div(_templateObject$1, media.sm(_templateObject2$1), media.lg(_templateObject3$1, function (props) {
  return props.maxWidthAuto ? 'auto' : '960px';
}));

var index = (function (_ref) {
  var children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['children']);
  return React.createElement(
    Grid,
    restProps,
    children
  );
});

/* eslint-disable */
// export { default as Col } from './Col';
// export { default as Row } from './Row';

export { index as Grid };
//# sourceMappingURL=index.es.js.map
