import React from 'react';
import { HTMLInputProps } from '../../src/interfaces/props';
import { Checkbox } from '@class101/ui';

export interface Props extends HTMLInputProps {
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Component = ({
  ...restProps
}: Props): React.ReactNode => (
  <Checkbox {...restProps} />
);
