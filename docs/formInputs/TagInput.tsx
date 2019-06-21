// @flow
import React from 'react';
import { TagInput } from '@class101/ui';

interface Props {
  className?: string;
  style?: Object;
  inputStyle?: Object;
  inputProps?: Object;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
  value: string[];
  disabled?: boolean;
  onChange?: (value?: string[]) => void;
  onRemove?: (value?: string[]) => void;
  onEnter?: (value?: string[]) => void;
  addOnBlur?: boolean;
  separator: RegExp | string;
}

export const Component = (props: Props) => <TagInput {...props} />;
