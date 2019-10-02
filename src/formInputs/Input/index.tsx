import React, {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  MouseEventHandler,
  PureComponent,
  RefObject,
} from 'react';
import styled from 'styled-components';

import { Intent, IntentValue } from '../../core/common';
import { body2 } from '../../core/TextStyles';
import { FormInputBaseStyle, FormInputFillStyle, FormInputStyleBySize, InputSize, InputSizeValue } from '../common';

export interface FormInputBaseProps<T> {
  id?: string;
  intent: IntentValue;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<T>;
  onBlur?: FocusEventHandler<T>;
  onClick?: MouseEventHandler<T>;
  inputRef?: RefObject<T>;
  className?: string;
}

export interface InputProps extends FormInputBaseProps<HTMLInputElement> {
  size?: InputSizeValue;
  fill?: boolean;
  inline?: boolean;
  value?: string | string[] | number;
  type?: string;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
}

export class Input extends PureComponent<InputProps> {
  public static defaultProps: Partial<InputProps> = {
    size: InputSize.md,
    fill: true,
    type: 'text',
    intent: Intent.DEFAULT,
  };

  public render() {
    const { fill, type, size, inputRef, inputAttributes, ...restProps } = this.props;
    return (
      <StyledInput
        type={type}
        fill={`${fill}`}
        inputSize={size || InputSize.md}
        {...inputAttributes}
        {...restProps}
        {...inputRef && {
          ref: inputRef,
        }}
      />
    );
  }
}

const StyledInput = styled.input<{ inputSize: InputSizeValue; fill?: string; inline?: boolean; intent: Intent }>`
  ${body2};
  ${FormInputBaseStyle};
  ${props => FormInputStyleBySize[props.inputSize]};
  ${props =>
    props.inline
      ? `
    display: inline-block;
  `
      : `
    display: block;
    ${props.fill === 'true' ? FormInputFillStyle : ''}
  `}
  box-sizing: border-box;
  padding: 0 16px;
`;
