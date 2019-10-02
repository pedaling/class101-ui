import { css, FlattenSimpleInterpolation } from 'styled-components';

import { Intent } from '../core';
import { gray200, gray400, gray50, gray500, gray800, orange500, red500 } from '../core/Colors';

export enum InputSize {
  sm = 'sm',
  md = 'md',
}

export type InputSizeValue = 'sm' | 'md';

const FormInputIntentIStyle: { [key in Intent]: FlattenSimpleInterpolation } = {
  [Intent.DEFAULT]: css`
    border-color: ${gray200};
    &:hover {
      border-color: ${gray400};
    }
  `,
  [Intent.DANGER]: css`
    position: relative;
    z-index: 1;
    border-color: ${red500};
  `,
  [Intent.WARNING]: css`
    position: relative;
    z-index: 1;
    border-color: ${orange500};
  `,
};

export const FormInputBaseStyle = css<{ focused?: boolean; disabled?: boolean; intent: Intent }>`
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  background-color: white;
  transition: box-shadow 0.1s ease-in-out;

  ${props =>
    props.focused &&
    css`
      outline: none;
      position: relative;
      z-index: 2;
      border-color: ${gray800};
    `}
  ${props =>
    props.disabled &&
    css`
      background-color: ${gray50};
      &:hover {
        cursor: not-allowed;
      }
    `}
  &::-webkit-input-placeholder {
    color: ${gray500};
  }
  &::-moz-placeholder {
    color: ${gray500};
  }
  &:-ms-input-placeholder {
    color: ${gray500};
  }
  &:-moz-placeholder {
    color: ${gray500};
  }

  ${props => FormInputIntentIStyle[props.intent]}
`;

export const FormInputFillStyle = css`
  flex: 1 1 auto;
  width: 100%;
`;

export const FormInputStyleBySize: { [key in InputSize]: FlattenSimpleInterpolation } = {
  [InputSize.sm]: css`
    height: 40px;
  `,
  [InputSize.md]: css`
    height: 48px;
  `,
};
