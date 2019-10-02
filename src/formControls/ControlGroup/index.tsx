import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { gray200 } from '../../core/Colors';

export class ControlGroup extends PureComponent {
  public render() {
    const { children, ...restProps } = this.props;

    return <Container {...restProps}>{children}</Container>;
  }
}

const Container = styled.div`
  display: flex;
  align-items: stretch;
  & > a,
  & > button {
    flex: none;
    border: 1px solid ${gray200};
    border-left: none;
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  & > input,
  & > select {
    &:not(:first-child) {
      margin-left: -1px;
      border-radius: 0;
    }
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
  & > select {
    max-width: 30%;
  }
`;
