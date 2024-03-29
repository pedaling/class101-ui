import { css, FlattenSimpleInterpolation } from 'styled-components';

import {
  gray200, gray400, gray50, gray500, gray900,
} from '../core/Colors';

export type InputSize = 'sm' | 'md';

export const FormInputStyle = css`
  border: solid 1px ${gray200};
  border-radius: 1px;
  background-color: white;
  &:hover {
    border: solid 1px ${gray400};
  }
  &:focus {
    outline: none;
    border-color: ${gray900};
  }
  &:disabled {
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
`;

export const FormInputFillStyle = css`
  flex: 1 1 auto;
  width: 100%;
`;

export const FormInputStyleBySize: { [key in InputSize]: FlattenSimpleInterpolation } = {
  sm: css`
    height: 40px;
  `,
  md: css`
    height: 48px;
  `,
};
