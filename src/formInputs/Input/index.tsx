import { HTMLInputProps } from 'interfaces/props';
import React from 'react';
import styled from 'styled-components';
import { gray900, orange500, redError } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';
import { FormInputFillStyle, FormInputStyle, FormInputStyleBySize, InputSize } from '../common';
import { InlineError, Intent } from '../InlineError';

type FillAndSize = {
  fill: boolean;
  size: InputSize;
};

type InputPropsWithoutFillAndSize = Omit<HTMLInputProps, 'size'> & {
  inputRef?: React.RefObject<HTMLInputElement>;
  label?: string;
  type?: string;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  className?: string;
};

export type InputProps = InputPropsWithoutFillAndSize & Partial<FillAndSize>;

export const Input = React.memo<InputProps>(
  ({
    type = 'text',
    className,
    style,
    inputStyle,
    inline,
    allowMessage,
    warnMessage,
    errorMessage,
    label,
    size = 'md',
    id,
    fill = true,
    inputRef,
    ...restProps
  }) => {
    const inputId = id && label && `input-${label}`;
    return (
      <Container style={style} inline={inline} className={className}>
        {label && <InlineLabel htmlFor={inputId}>{label}</InlineLabel>}
        <StyledInputWrapper
          className={`${className || ''} ${errorMessage ? ' error' : ''} ${warnMessage ? ' warn' : ''}`}
          type={type}
          id={inputId}
          size={size}
          style={inputStyle}
          ref={inputRef}
          fill={fill}
          {...restProps}
        />
        {allowMessage && !errorMessage && (
          <InlineError icon={null} intent={Intent.DEFAULT}>
            {allowMessage}
          </InlineError>
        )}
        {errorMessage && <InlineError intent={Intent.DANGER}>{errorMessage}</InlineError>}
        {warnMessage && <InlineError intent={Intent.WARNING}>{warnMessage}</InlineError>}
      </Container>
    );
  }
);

type StyledInputWrapperProps = InputPropsWithoutFillAndSize & FillAndSize;

const StyledInputWrapper = React.forwardRef<HTMLInputElement, StyledInputWrapperProps>(
  ({ fill, size, ...restProps }, ref) => <StyledInput ref={ref} inputSize={size} fill={fill} {...restProps} />
);

type StyledInputProps = {
  inputSize: InputSize;
  fill?: boolean;
};

const StyledInput = styled.input<StyledInputProps>`
  ${body2};
  ${FormInputStyle};
  ${props => FormInputStyleBySize[props.inputSize]};
  ${props => (props.fill ? FormInputFillStyle : null)};
  color: ${gray900};
  box-sizing: border-box;
  padding: 0 16px;
  border-radius: 3px;
  &.error {
    border: solid 1px ${redError};
  }

  &.warn {
    border: solid 1px ${orange500};
  }
`;

const Container = styled.div<{ inline?: boolean }>`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;

const InlineLabel = styled.label`
  ${body2}
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;
