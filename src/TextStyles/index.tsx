import { css } from 'styled-components';

export interface TextStyleProperties {
  fontWeight?: string | number;
}

export const display2 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 96px;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 108px;
  letter-spacing: -2px;
  margin: 0;
`;

export const display3 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 72px;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 86px;
  letter-spacing: -1.5px;
  margin: 0;
`;

export const headline1 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 48px;
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: 56px;
  letter-spacing: -1px;
  margin: 0;
`;

export const headline2 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 32px;
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: 40px;
  letter-spacing: -0.6px;
  margin: 0;
`;

export const headline3 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 24px;
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: 32px;
  letter-spacing: -0.4px;
  margin: 0;
`;

export const subtitle1 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 20px;
  font-weight: ${props => props.fontWeight || 'bold'};
  line-height: 28px;
  letter-spacing: -0.3px;
  margin: 0;
`;

export const body1 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 16px;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 24px;
  letter-spacing: -0.2px;
  margin: 0;
`;

export const body2 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 14px;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 20px;
  letter-spacing: -0.2px;
  margin: 0;
`;

export const caption1 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 11px;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 16px;
  letter-spacing: normal;
  margin: 0;
`;

export const caption2 = css<TextStyleProperties>`
  font-family: 'SpoqaHanSans';
  font-size: 9px;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 12px;
  letter-spacing: normal;
  margin: 0;
`;
