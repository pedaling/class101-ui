import styled, { css } from 'styled-components';
import React from 'react';

var white = '#FFF';
var black = '#000';

var gray900 = '#292a2b';
var gray800 = '#353a3c';
var gray700 = '#4c5256';
var gray600 = '#868c91';
var gray500 = '#a8aeb3';
var gray400 = '#cdd1d6';
var gray300 = '#e0e2e6';
var gray200 = '#e9ecef';
var gray100 = '#eff1f3';
var gray50 = '#f9f9fb';

var red50 = '#fff0f0';
var red200 = '#ffc9c9';
var red100 = '#ffd9d9';
var red300 = '#f7abb0';
var red400 = '#f28896';
var red600 = '#e52c60';
var red500 = '#ed6b85';
var red700 = '#e0004d';
var red800 = '#c20042';
var red900 = '#a40038';

var orange50 = '#fff9f2';
var orange200 = '#ffd8a8';
var orange400 = '#ffa94d';
var orange100 = '#ffe8cc';
var orange300 = '#ffc078';
var orange500 = '#ff922b';
var orange600 = '#fd7e14';
var orange700 = '#f76707';
var orange800 = '#e8590c';
var orange900 = '#d9480f';

var green500 = '#00b79d';

var redError = '#ff5252';

var index = /*#__PURE__*/Object.freeze({
  white: white,
  black: black,
  gray900: gray900,
  gray800: gray800,
  gray700: gray700,
  gray600: gray600,
  gray500: gray500,
  gray400: gray400,
  gray300: gray300,
  gray200: gray200,
  gray100: gray100,
  gray50: gray50,
  red50: red50,
  red200: red200,
  red100: red100,
  red300: red300,
  red400: red400,
  red600: red600,
  red500: red500,
  red700: red700,
  red800: red800,
  red900: red900,
  orange50: orange50,
  orange200: orange200,
  orange400: orange400,
  orange100: orange100,
  orange300: orange300,
  orange500: orange500,
  orange600: orange600,
  orange700: orange700,
  orange800: orange800,
  orange900: orange900,
  green500: green500,
  redError: redError
});

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n      @media ', ' {\n        ', '\n      }\n    '], ['\n      @media ', ' {\n        ', '\n      }\n    ']);

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
    return css(_templateObject, mediaQuery, css.apply(undefined, arguments));
  };
  return acc;
}, {});

var index$1 = /*#__PURE__*/Object.freeze({
  buildMediaQuery: buildMediaQuery,
  SIZES: SIZES,
  media: media
});

var _templateObject$1 = taggedTemplateLiteral(['\n  font-family: \'NanumSquare\';\n  font-size: 32px;\n  color: ', ';\n  line-height: 44px;\n  font-weight: bold;\n'], ['\n  font-family: \'NanumSquare\';\n  font-size: 32px;\n  color: ', ';\n  line-height: 44px;\n  font-weight: bold;\n']),
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
    _templateObject25 = taggedTemplateLiteral(['\n  font-size: 9px;\n  font-weight: bold;\n  color: ', ';\n  line-height: 12px;\n'], ['\n  font-size: 9px;\n  font-weight: bold;\n  color: ', ';\n  line-height: 12px;\n']);

var heading1BlackBold = css(_templateObject$1, gray800);

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

var index$2 = /*#__PURE__*/Object.freeze({
  heading1BlackBold: heading1BlackBold,
  heading2WhiteBold: heading2WhiteBold,
  heading1WhiteBold: heading1WhiteBold,
  body1Black: body1Black,
  body2Black: body2Black,
  body2White: body2White,
  body2Gray: body2Gray,
  tiny1WhiteBold: tiny1WhiteBold,
  body1WhiteBold: body1WhiteBold,
  body2BlackBold: body2BlackBold,
  subheadingBlackBold: subheadingBlackBold,
  tiny1Black: tiny1Black,
  tiny2Black: tiny2Black,
  tiny2White: tiny2White,
  body1Body: body1Body,
  heading3BlackBold: heading3BlackBold,
  tiny1Gray: tiny1Gray,
  heading2BlackExtraBold: heading2BlackExtraBold,
  tiny1White: tiny1White,
  heading3WhiteBold: heading3WhiteBold,
  body1Gray: body1Gray,
  body2WhiteBold: body2WhiteBold,
  body1BlackBold: body1BlackBold,
  subheadingGray: subheadingGray,
  tiny2Gray: tiny2Gray,
  heading1BlackExtraBold: heading1BlackExtraBold,
  heading3BlackExtraBold: heading3BlackExtraBold,
  subheadingWhiteBold: subheadingWhiteBold,
  tiny1BlackBold: tiny1BlackBold,
  body1White: body1White,
  body1Paragraph: body1Paragraph,
  body2Body: body2Body,
  body2Paragraph: body2Paragraph,
  heading3WhiteExtraBold: heading3WhiteExtraBold,
  heading2BlackBold: heading2BlackBold,
  tiny2WhiteBold: tiny2WhiteBold,
  heading1WhiteExtraBold: heading1WhiteExtraBold,
  body2GrayBold: body2GrayBold,
  heading3GrayBold: heading3GrayBold,
  subheadingBlack: subheadingBlack
});

var _templateObject$2 = taggedTemplateLiteral(['\n  position: relative;\n  margin: 0 32px;\n  ', ';\n  ', ';\n'], ['\n  position: relative;\n  margin: 0 32px;\n  ', ';\n  ', ';\n']),
    _templateObject2$1 = taggedTemplateLiteral(['\n    margin: 0 24px;\n  '], ['\n    margin: 0 24px;\n  ']),
    _templateObject3$1 = taggedTemplateLiteral(['\n    max-width: ', ';\n  '], ['\n    max-width: ', ';\n  ']);

var Grid = styled.div(_templateObject$2, media.sm(_templateObject2$1), media.lg(_templateObject3$1, function (props) {
  return props.maxWidthAuto ? 'auto' : '960px';
}));

var _templateObject$3 = taggedTemplateLiteral(['\n  position: relative;\n  min-height: 1px;\n  padding-right: 12px;\n  padding-left: 12px;\n  float: left;\n  box-sizing: border-box;\n\n  ', ';\n\n  ', ';\n\n  ', ';\n'], ['\n  position: relative;\n  min-height: 1px;\n  padding-right: 12px;\n  padding-left: 12px;\n  float: left;\n  box-sizing: border-box;\n\n  ', ';\n\n  ', ';\n\n  ', ';\n']),
    _templateObject2$2 = taggedTemplateLiteral(['\n    width: ', '%;\n    padding-right: 4px;\n    padding-left: 4px;\n  '], ['\n    width: ', '%;\n    padding-right: 4px;\n    padding-left: 4px;\n  ']),
    _templateObject3$2 = taggedTemplateLiteral(['\n    width: ', '%;\n  '], ['\n    width: ', '%;\n  ']);

var sizeToPercent = function sizeToPercent(size) {
  return (size || 12) / 12 * 100;
};

var Col = styled.div(_templateObject$3, function (props) {
  return props.sm && media.sm(_templateObject2$2, function (props) {
    return sizeToPercent(props.sm);
  });
}, function (props) {
  return props.md && media.md(_templateObject3$2, function (props) {
    return sizeToPercent(props.md || props.sm);
  });
}, function (props) {
  return props.lg && media.lg(_templateObject3$2, function (props) {
    return sizeToPercent(props.lg || props.md || props.sm);
  });
});

var _templateObject$4 = taggedTemplateLiteral(['\n  margin-right: -12px;\n  margin-left: -12px;\n  ', ';\n'], ['\n  margin-right: -12px;\n  margin-left: -12px;\n  ', ';\n']),
    _templateObject2$3 = taggedTemplateLiteral(['\n    margin-right: -4px;\n    margin-left: -4px;\n  '], ['\n    margin-right: -4px;\n    margin-left: -4px;\n  ']);

var Row = styled.div.attrs({ className: 'clearfix' })(_templateObject$4, media.sm(_templateObject2$3));

var index$3 = (function () {
  return React.createElement(
    'div',
    null,
    'zz'
  );
});

export default index$3;
export { index as Colors, index$1 as BreakPoints, index$2 as TextStyles, Grid, Col, Row };
//# sourceMappingURL=index.es.js.map
