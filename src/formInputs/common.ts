import { css, FlattenSimpleInterpolation } from 'styled-components';

import { gray200, gray400, gray50, gray500, gray800, orange500, redError } from '../core/Colors';

export enum InputSize {
  sm = 'sm',
  md = 'md',
}

export type InputSizeValue = 'sm' | 'md';

export const FormInputBaseStyle = css`
  border: solid 1px ${gray200};
  border-radius: 3px;
  background-color: white;
  transition: box-shadow 0.1s ease-in-out;
  &:hover {
    border-color: ${gray400};
  }
  &:focus,
  &.focused {
    outline: none;
    position: relative;
    z-index: 2;
    border-color: ${gray800};
  }
  &:disabled,
  &.disabled {
    background-color: ${gray50};
    &:hover {
      cursor: not-allowed;
    }
  }
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

  &.error {
    position: relative;
    z-index: 1;
    border-color: ${redError};
  }

  &.warn {
    position: relative;
    z-index: 1;
    border-color: ${orange500};
  }
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
