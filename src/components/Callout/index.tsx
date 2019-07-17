import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { gray000, gray800, green500, orange600, white } from '../../Colors';
import { Alert, CheckCircle, Info } from '../../Icon';
import { body2, caption1 } from '../../TextStyles';
import Button, { ButtonProps } from '../Button';

export enum CalloutStatus {
  DEFAULT,
  SUGGEST,
  WARNING,
}

interface ActionProps extends ButtonProps {
  content: string;
}
interface Props {
  title: string;
  status: CalloutStatus;
  icon?: React.ReactNode;
  action?: ActionProps;
  className?: string;
}

const iconByCalloutStatus = {
  [CalloutStatus.DEFAULT]: <Info />,
  [CalloutStatus.SUGGEST]: <CheckCircle fillColor={green500} />,
  [CalloutStatus.WARNING]: <Alert fillColor={orange600} />,
};

export default class Callout extends PureComponent<Readonly<Props>> {
  public static defaultProps: Partial<Props> = {
    status: CalloutStatus.DEFAULT,
  };

  public render() {
    const { title, icon, status, className, children, action } = this.props;
    return (
      <Container className={className}>
        <Title>
          <Icon>{icon ? icon : iconByCalloutStatus[status]}</Icon>
          {title}
        </Title>
        <Content>{children}</Content>
        {action && (
          <StyledButton size="sm" color={gray800} backgroundColor={white} {...action}>
            {action.content}
          </StyledButton>
        )}
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 16px;
  border-radius: 3px;
  background-color: ${gray000};
`;

const Title = styled.div`
  ${body2};
  margin-bottom: 8px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 5px;
  > svg {
    width: 15px;
    height: 15px;
    flex: none;
  }
`;

const Content = styled.div`
  ${caption1};
  > * + * {
    margin-top: 8px;
  }
  img {
    width: 100%;
    max-width: 100%;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 8px;
`;
