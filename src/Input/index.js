// @flow
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { orange500, gray800, gray500, gray400, gray300, gray50, redError, gray600 } from '../Colors';
import { body2Black } from '../TextStyles';

type Props = {
  type: string,
  className?: string,
  style?: {},
  inputStyle?: {},
  inline?: boolean,
  allowMessage?: string,
  warnMessage?: string,
  errorMessage?: string,
};

const StyledInput = styled.input`
  ${body2Black}
  border-radius: 1px;
  background-color: white;
  border: solid 1px ${gray300};
  width: 100%;
  height: 48px;
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

const Container = styled.div`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
`;

const DescriptionIcon = styled.img.attrs({ alt: '!' })`
  width: 16px;
  height: 16px;
  margin-right: 2px;
`;

export default class Input extends Component<Props> {
  static defaultProps = {
    size: 'md',
    type: 'text'
  };

  render() {
    const {
      type,
      className,
      style,
      inputStyle,
      inline,
      allowMessage,
      warnMessage,
      errorMessage,
      ...restProps
    } = this.props;

    return (
      <Container style={ style } inline={ inline }>
        <StyledInput
          className={ `${className || ''} ${errorMessage ? ' error' : ''} ${warnMessage ? ' warn' : ''}` }
          type={ type }
          inputStyle={ inputStyle }
          { ...restProps }
        />
        {
          allowMessage && !errorMessage &&
          <AllowText>{ allowMessage }</AllowText>
        }
        {
          errorMessage &&
          <ErrorText>
            <DescriptionIcon src="https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-danger-red.png" />
            <span>{ errorMessage }</span>
          </ErrorText>
        }
        {
          warnMessage &&
          <WarnText>
            <DescriptionIcon src="https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-danger-yellow.png" />
            <span>{ warnMessage }</span>
          </WarnText>
        }
      </Container>
    );
  }
}
