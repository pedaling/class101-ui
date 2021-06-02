import { blue800 } from 'core/Colors';
import { memo, ReactNode } from 'react';
import styled from 'styled-components';

type SnackBarProps = {
  message: string;
  actionElement?: ReactNode;
};

const SnackBar = memo(({ message, actionElement }: SnackBarProps) => (
  <Container>
    <MessageContainer>{message}</MessageContainer>
    {actionElement && <ActionContainer>{actionElement}</ActionContainer>}
  </Container>
));

export default SnackBar;

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
