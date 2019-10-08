import React, {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  memo,
  MouseEventHandler,
  PureComponent,
  Ref,
} from 'react';
import styled from 'styled-components';

import { Intent, IntentValue } from '../../core/common';
import { body2 } from '../../core/TextStyles';
import { FormInputBaseStyle, FormInputFillStyle, FormInputStyleBySize, InputSize, InputSizeValue } from '../common';

export interface FormInputBaseProps<T> {
  id?: string;
  intent?: IntentValue;
  disabled?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<T>;
  onBlur?: FocusEventHandler<T>;
  onClick?: MouseEventHandler<T>;
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

export const Input = memo(
  forwardRef(
    (
      {
        fill = true,
        type = 'text',
        size = InputSize.md,
        intent = Intent.DEFAULT,
        inputAttributes,
        ...restProps
      }: InputProps,
      ref: Ref<HTMLInputElement>
    ) => {
      return (
        <StyledInput
          type={type}
          fill={`${fill}`}
          inputSize={size}
          intent={intent}
          {...inputAttributes}
          {...restProps}
          ref={ref}
        />
      );
    }
  )
);

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
