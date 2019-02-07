import React from 'react';
import styled, { css } from 'styled-components';

import { gray300, gray400, gray50, gray500, gray600, gray800, orange500, redError } from '../Colors';
import { Alert } from '../Icon';
import { HTMLInputProps } from '../interfaces/props';
import { body2 } from '../TextStyles';

type Size = 'sm' | 'md';
interface Props {
  size: Size;
  type: string;
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
}

const defaultStyle = css`
  height: 48px;
`;
const smallStyle = css`
  height: 40px;
`;

const StyledInput = styled.input<{ size: Size }>`
  ${body2};
  color: ${gray800};
  border-radius: 1px;
  background-color: white;
  border: solid 1px ${gray300};
  width: 100%;
  ${props => (props.size === 'sm' ? smallStyle : defaultStyle)};
  padding: 0 16px;
  &:hover {
    border: solid 1px ${gray400};
  }
  &:disabled {
    background-color: ${gray50};
    &:hover {
      cursor: not-allowed;
    }
  }
  &:focus {
    outline: none;
    border-color: ${gray800};
  }
  &::-webkit-input-placeholder {
    color: ${gray500};
  }
  &::-moz-placeholder {
    color: ${gray500};
  }
  &:-ms-input-placeholder {
    color: ${gray500};
  }
  &:-moz-placeholder {
    color: ${gray500};
  }

  &.error {
    border: solid 1px ${redError};
  }

  &.warn {
    border: solid 1px ${orange500};
  }
`;

const DescriptionStyle = css`
  margin: 0;
  margin-top: 4px;
  font-size: 11px;
  line-height: 16px;
  font-weight: normal;

  * {
    vertical-align: middle;
  }

  span {
    margin-left: 2px;
  }
`;

const ErrorText = styled.h6`
  ${DescriptionStyle};
  color: ${redError};
`;

const WarnText = styled.h6`
  ${DescriptionStyle};
  color: ${orange500};
`;

const AllowText = styled.h6`
  ${DescriptionStyle};
  color: ${gray600};
`;

const Container = styled.div<{ inline?: boolean }>`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;

export default class Input extends React.PureComponent<HTMLInputProps & Props> {
  public static defaultProps: Partial<Props> = {
    size: 'md',
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
      size,
      ...restProps
    } = this.props;

    return (
      <Container style={style} inline={inline}>
        <StyledInput
          className={`${className || ''} ${errorMessage ? ' error' : ''} ${warnMessage ? ' warn' : ''}`}
          type={type}
          size={size}
          style={inputStyle}
          {...restProps}
        />
        {allowMessage && !errorMessage && <AllowText>{allowMessage}</AllowText>}
        {errorMessage && (
          <ErrorText>
            <Alert size={16} fillColor={redError} />
            <span>{errorMessage}</span>
          </ErrorText>
        )}
        {warnMessage && (
          <WarnText>
            <Alert size={16} fillColor={orange500} />
            <span>{warnMessage}</span>
          </WarnText>
        )}
      </Container>
    );
  }
}
