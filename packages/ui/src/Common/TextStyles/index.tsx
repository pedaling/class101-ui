import { css } from 'styled-components';

import { Colors } from '@common';

export interface TextStyleProperties {
  fontWeight?: string | number;
  color?: string;
}

export const display2 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 96px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || Colors.gray800};
  line-height: 108px;
  letter-spacing: -2px;
  margin: 0;
`;

export const display3 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 72px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || Colors.gray800};
  line-height: 86px;
  letter-spacing: -1.5px;
  margin: 0;
`;

export const headline1 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 48px;
  font-weight: ${props => props.fontWeight || 'bold'};
  color: ${props => props.color || Colors.gray800};
  line-height: 56px;
  letter-spacing: -1px;
  margin: 0;
`;

export const headline2 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 32px;
  font-weight: ${props => props.fontWeight || 'bold'};
  color: ${props => props.color || Colors.gray800};
  line-height: 40px;
  letter-spacing: -0.6px;
  margin: 0;
`;

export const headline3 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 24px;
  font-weight: ${props => props.fontWeight || 'bold'};
  color: ${props => props.color || Colors.gray800};
  line-height: 32px;
  letter-spacing: -0.4px;
  margin: 0;
`;

export const subtitle1 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 20px;
  font-weight: ${props => props.fontWeight || 'bold'};
  color: ${props => props.color || Colors.gray800};
  line-height: 28px;
  letter-spacing: -0.3px;
  margin: 0;
`;

export const body1 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 16px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || Colors.gray800};
  line-height: 24px;
  letter-spacing: -0.2px;
  margin: 0;
`;

export const body2 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 14px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || Colors.gray800};
  line-height: 20px;
  letter-spacing: -0.2px;
  margin: 0;
`;

export const caption1 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 11px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || Colors.gray800};
  line-height: 16px;
  letter-spacing: normal;
  margin: 0;
`;

export const caption2 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 9px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || Colors.gray800};
  line-height: 12px;
  letter-spacing: normal;
  margin: 0;
`;

export const TextStyles = {
  display2,
  display3,
  headline1,
  headline2,
  headline3,
  subtitle1,
  body1,
  body2,
  caption1,
  caption2,
};
