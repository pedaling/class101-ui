import { css } from 'styled-components';

import { gray900 } from '../Colors';

const DEFAULT_TEXT_COLOR = gray900;

export interface TextStyleProperties {
  fontWeight?: string | number;
  color?: string;
}

export const display2 = css<TextStyleProperties>`
  font-size: 96px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 108px;
  letter-spacing: -1px;
  margin: 0;
`;

export const display3 = css<TextStyleProperties>`
  font-size: 72px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 86px;
  letter-spacing: -0.5px;
  margin: 0;
`;

export const headline1 = css<TextStyleProperties>`
  font-size: 48px;
  font-weight: ${props => props.fontWeight || 'bold'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 60px;
  margin: 0;
`;

export const headline2 = css<TextStyleProperties>`
  font-size: 32px;
  font-weight: ${props => props.fontWeight || 'bold'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 44px;
  letter-spacing: -0.6px;
  margin: 0;
`;

export const headline3 = css<TextStyleProperties>`
  font-size: 24px;
  font-weight: ${props => props.fontWeight || 'bold'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0;
`;

export const subtitle1 = css<TextStyleProperties>`
  font-size: 20px;
  font-weight: ${props => props.fontWeight || 'bold'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 28px;
  margin: 0;
`;

export const subtitle2 = css<TextStyleProperties>`
  font-size: 18px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 24px;
  letter-spacing: -0.45px;
  margin: 0;
`;

export const body1 = css<TextStyleProperties>`
  font-size: 16px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0;
`;

export const body2 = css<TextStyleProperties>`
  font-size: 14px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0;
`;

export const caption1 = css<TextStyleProperties>`
  font-size: 11px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 16px;
  letter-spacing: normal;
  margin: 0;
`;

export const caption2 = css<TextStyleProperties>`
  font-size: 9px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 12px;
  letter-spacing: normal;
  margin: 0;
`;
