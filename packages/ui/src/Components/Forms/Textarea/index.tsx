// @flow
import { BaseProps, Colors, HTMLTextareaProps } from '@common';
import { Icon } from '@components';
import React from 'react';
import styled, { css } from 'styled-components';

import { FormInputStyle } from '../common';

interface Props extends BaseProps {
  inputStyle?: React.CSSProperties;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
}

export default class Textarea extends React.PureComponent<HTMLTextareaProps & Props> {
  public render() {
    const { className, style, inputStyle, inline, allowMessage, warnMessage, errorMessage, ...restProps } = this.props;

    return (
      <Container style={style} inline={inline}>
        <StyledTextarea
          className={`${className || ''} ${errorMessage ? ' error' : ''} ${warnMessage ? ' warn' : ''}`}
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
            <Icon.Alert size={16} fillColor={Colors.redError} />
            <span>{warnMessage}</span>
          </WarnText>
        )}
      </Container>
    );
  }
}

const StyledTextarea = styled.textarea`
  ${FormInputStyle};
  width: 100%;
  height: 104px;
  padding: 12px 16px;

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

const Container = styled.div<Props>`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;
