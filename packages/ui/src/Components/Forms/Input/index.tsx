import { Colors } from '@common';
import { Icon } from '@components';
import { HTMLInputProps } from 'Common/Props';
import React from 'react';
import styled, { css } from 'styled-components';

import { FormInputFillStyle, FormInputStyle, FormInputStyleBySize, InputSize } from '../common';

export interface InputProps {
  size: InputSize;
  type: string;
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  fill?: boolean;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
}

export default class Input extends React.PureComponent<HTMLInputProps & InputProps> {
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
            <Icon.Alert size={16} fillColor={Colors.redError} />
            <span>{errorMessage}</span>
          </ErrorText>
        )}
        {warnMessage && (
          <WarnText>
            <Icon.Alert size={16} fillColor={Colors.orange500} />
            <span>{warnMessage}</span>
          </WarnText>
        )}
      </Container>
    );
  }
}

const StyledInput = styled.input<InputProps>`
  ${FormInputStyle};
  ${props => FormInputStyleBySize[props.size]};
  ${props => (props.fill ? FormInputFillStyle : null)};
  padding: 0 16px;

  &.error {
    border: solid 1px ${Colors.redError};
  }

  &.warn {
    border: solid 1px ${Colors.orange500};
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
  color: ${Colors.redError};
`;

const WarnText = styled.h6`
  ${DescriptionStyle};
  color: ${Colors.orange500};
`;

const AllowText = styled.h6`
  ${DescriptionStyle};
  color: ${Colors.gray600};
`;

const Container = styled.div<{ inline?: boolean }>`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;
