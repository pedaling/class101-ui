// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { orange500, redError, gray600 } from '../Colors';

interface Props {
  className?: string;
  style?: {};
  inputStyle?: {};
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
}

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
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

const Container = styled.div<Props>`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;

const DescriptionIcon = styled.img.attrs({ alt: '!' })`
  width: 16px;
  height: 16px;
  margin-right: 2px;
`;

export default class Checkbox extends React.PureComponent<Props> {
  public render() {
    const { className, style, inputStyle, inline, allowMessage, warnMessage, errorMessage, ...restProps } = this.props;

    return (
      <Container style={style} inline={inline}>
        <StyledCheckbox
          className={`${className || ''} ${errorMessage ? ' error' : ''} ${warnMessage ? ' warn' : ''}`}
          style={inputStyle}
          {...restProps}
        />
        {allowMessage && !errorMessage && <AllowText>{allowMessage}</AllowText>}
        {errorMessage && (
          <ErrorText>
            <DescriptionIcon src="https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-danger-red.png" />
            <span>{errorMessage}</span>
          </ErrorText>
        )}
        {warnMessage && (
          <WarnText>
            <DescriptionIcon src="https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-danger-yellow.png" />
            <span>{warnMessage}</span>
          </WarnText>
        )}
      </Container>
    );
  }
}
