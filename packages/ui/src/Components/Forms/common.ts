import { css, FlattenSimpleInterpolation } from 'styled-components';

import { Colors, TextStyles } from '@common';

export enum InputSize {
  sm = 'sm',
  md = 'md',
}

export const FormInputStyle = css`
  ${TextStyles.body2};
  color: ${Colors.gray800};
  border: solid 1px ${Colors.gray300};
  border-radius: 1px;
  background-color: white;
  &:hover {
    border: solid 1px ${Colors.gray400};
  }
  &:focus {
    outline: none;
    border-color: ${Colors.gray800};
  }
  &:disabled {
    background-color: ${Colors.gray50};
    &:hover {
      cursor: not-allowed;
    }
  }

  &::-webkit-input-placeholder {
    color: ${Colors.gray500};
  }
  &::-moz-placeholder {
    color: ${Colors.gray500};
  }
  &:-ms-input-placeholder {
    color: ${Colors.gray500};
  }
  &:-moz-placeholder {
    color: ${Colors.gray500};
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
