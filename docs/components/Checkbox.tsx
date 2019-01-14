// @flow
import React from 'react';
import { Checkbox, Colors } from '@class101/ui';

export interface Props {
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
  checked?: boolean;
  onChange?: React.ChangeEvent<HTMLInputElement>;
}

export const Component = ({
  ...restProps
}: Props): React.ReactNode => (
  <Checkbox {...restProps} />
);
