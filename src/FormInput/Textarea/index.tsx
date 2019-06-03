// @flow
import React from 'react';
import styled from 'styled-components';

import { gray300, gray500, gray800, orange500, redError } from '../../Colors';
import { HTMLTextareaProps } from '../../interfaces/props';
import { body2 } from '../../TextStyles';
import { FormInputStyle } from '../common';
import InlineError, { Intent } from '../InlineError';

interface Props {
  className?: string;
  style?: React.CSSProperties;
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

const StyledTextarea = styled.textarea`
  ${FormInputStyle}
  ${body2};
  color: ${gray800};
  border-radius: 1px;
  background-color: white;
  border: solid 1px ${gray300};
  width: 100%;
  height: 104px;
  padding: 12px 16px;
  box-sizing: border-box;

  &.error {
    border: solid 1px ${redError};
  }

  &.warn {
    border: solid 1px ${orange500};
  }
`;

const Container = styled.div<Props>`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;
