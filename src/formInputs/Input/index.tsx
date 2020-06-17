import { HTMLInputProps } from 'interfaces/props';
import React from 'react';
import styled from 'styled-components';
import { gray900, orange500, redError } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';
import { FormInputFillStyle, FormInputStyle, FormInputStyleBySize, InputSize } from '../common';
import { InlineError, Intent } from '../InlineError';

export interface InputProps {
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
}

export class Input extends React.PureComponent<HTMLInputProps & InputProps> {
  public static defaultProps: Partial<InputProps> = {
    size: InputSize.md,
    fill: true,
    type: 'text',
  };

  public render() {
    const {
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
    } = this.props;
    const inputId = id && label && `input-${label}`;
    return (
      <Container style={style} inline={inline} className={className}>
        {label && <InlineLabel htmlFor={inputId}>{label}</InlineLabel>}
        <StyledInput
          className={`${className || ''} ${errorMessage ? ' error' : ''} ${warnMessage ? ' warn' : ''}`}
          type={type}
          id={inputId}
          size={size}
          style={inputStyle}
          {...(inputRef && {
            ref: inputRef,
          })}
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
}

const StyledInput = styled(({ fill, size, ...restProps }: HTMLInputProps & InputProps) => <input {...restProps} />)`
  ${body2};
  ${FormInputStyle};
  ${props => FormInputStyleBySize[props.size]};
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
