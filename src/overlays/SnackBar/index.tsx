import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { blue800 } from '../../core/Colors';

interface SnackBarProps {
  message: string;
  actionElement?: React.ReactNode;
}

export class SnackBar extends PureComponent<SnackBarProps> {
  public render() {
    const { message, actionElement } = this.props;

    return (
      <Container>
        <MessageContainer>{message}</MessageContainer>
        <ActionContainer>{actionElement}</ActionContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  position: fixed;
  height: 56px;
  bottom: 0;
  left: 0;
  padding: 0 240px;
  right: 0;
  z-index: 1;
  align-content: center;
  background-color: ${blue800};
`;

const MessageContainer = styled.div`
  flex: 1;
  color: white;
  align-self: center;
`;

const ActionContainer = styled.div`
  align-self: center;
  & > * {
    margin-left: 8px;
  }
`;
