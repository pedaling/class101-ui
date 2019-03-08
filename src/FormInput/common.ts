import { css, FlattenSimpleInterpolation } from 'styled-components';

import { gray300, gray400, gray50, gray800 } from '../Colors';

// export type InputSize = 'sm' | 'md';

export enum InputSize {
  sm = 'sm',
  md = 'md',
}

export const FormInputStyle = css`
  border: solid 1px ${gray300};
  border-radius: 1px;
  background-color: white;
  &:hover {
    border: solid 1px ${gray400};
  }
  &:focus {
    outline: none;
    border-color: ${gray800};
  }
  &:disabled {
    background-color: ${gray50};
    &:hover {
      cursor: not-allowed;
    }
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
