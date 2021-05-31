import { HTMLInputProps } from 'interfaces/props';
import React from 'react';
import styled from 'styled-components';
import { gray900, orange500, redError } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';
import { FormInputFillStyle, FormInputStyle, FormInputStyleBySize, InputSize } from '../common';
import { InlineError, Intent } from '../InlineError';

export type InputProps = Omit<HTMLInputProps, 'size'> & {
  inputRef?: React.RefObject<HTMLInputElement>;
  label?: string;
  size: InputSize;
  type: string;
  fill?: boolean;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  className?: string;
};

export const Input = ({
  type,
  className,
  style,
  inputStyle,
  inline,
  allowMessage,
  warnMessage,
  errorMessage,
  label,
  size,
  id,
  inputRef,
  ...restProps
}: InputProps) => {
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
};

const StyledInputWrapper = React.forwardRef<HTMLInputElement, InputProps>(({ fill, size, ...restProps }, ref) => (
  <StyledInput ref={ref} inputSize={size} fill={fill} {...restProps} />
));

type StyledInputProps = {
  inputSize: InputSize;
  fill?: boolean;
};

const StyledInput = styled.input<StyledInputProps>`
  ${props => FormInputStyleBySize[props.inputSize]};
  ${body2};
  ${FormInputStyle};
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
