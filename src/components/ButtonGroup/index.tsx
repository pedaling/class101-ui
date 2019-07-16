import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonGroupProps {
  vertical?: boolean;
  fill?: boolean;
}

export class ButtonGroup extends PureComponent<ButtonGroupProps> {
  public render() {
    const { children, vertical, fill } = this.props;
    return (
      <ButtonGroupContainer vertical={vertical} fill={fill}>
        {children}
      </ButtonGroupContainer>
    );
  }
}

const VerticalStyle = css`
  flex-direction: column;
  & > :not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  & > :not(:last-child) {
    margin-top: -1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const HorizontalStyle = css`
  flex-direction: row;
  & > :not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > :not(:last-child) {
    margin-right: -1px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const FillStyle = css`
  width: 100%;
  & > * {
    flex: 1;
  }
`;

const ButtonGroupContainer = styled.div<ButtonGroupProps>`
  display: flex;
  ${props => (props.vertical ? VerticalStyle : HorizontalStyle)}
  ${props => (props.fill ? FillStyle : '')}
`;
