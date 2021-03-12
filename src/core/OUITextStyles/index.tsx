import { css } from 'styled-components';

import { TextStyleProperties } from '../TextStyles';

import { gray900 } from '../Colors';

const DEFAULT_TEXT_COLOR = gray900;

export const headline1 = css<TextStyleProperties>`
  font-size: 34px;
  font-weight: ${props => props.fontWeight || 'bold'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 44px;
  letter-spacing: -0.34px;
  margin: 0;
`;

export const headline2 = css<TextStyleProperties>`
  font-size: 28px;
  font-weight: ${props => props.fontWeight || 'bold'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 40px;
  letter-spacing: -0.28px;
  margin: 0;
`;

export const headline3 = css<TextStyleProperties>`
  font-size: 26px;
  font-weight: ${props => props.fontWeight || 'bold'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 36px;
  letter-spacing: -0.26px;
  margin: 0;
`;

export const subtitle1 = css<TextStyleProperties>`
  font-size: 20px;
  font-weight: ${props => props.fontWeight || 'bold'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 26px;
  letter-spacing: -0.2px;
  margin: 0;
`;

export const subtitle2 = css<TextStyleProperties>`
  font-size: 18px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 30px;
  letter-spacing: -0.18px;
  margin: 0;
`;

export const body1 = css<TextStyleProperties>`
  font-size: 16px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 20px;
  letter-spacing: -0.16px;
  margin: 0;
`;

export const body2 = css<TextStyleProperties>`
  font-size: 14px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 18px;
  letter-spacing: -0.14px;
  margin: 0;
`;

export const body3 = css<TextStyleProperties>`
  font-size: 13px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 18px;
  letter-spacing: -0.13px;
  margin: 0;
`;

export const caption1 = css<TextStyleProperties>`
  font-size: 12px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 16px;
  letter-spacing: normal;
  margin: 0;
`;

export const caption2 = css<TextStyleProperties>`
  font-size: 11px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 14px;
  letter-spacing: normal;
  margin: 0;
`;

export const caption3 = css<TextStyleProperties>`
  font-size: 10px;
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || DEFAULT_TEXT_COLOR};
  line-height: 12px;
  letter-spacing: normal;
  margin: 0;
`;


