import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { green500, orange600, red600 } from '../../../core/Colors';
import { body2, caption1 } from '../../../core/TextStyles';
import { Alert, CheckCircle, Info } from '../../../Icon/generated';
import { Button } from '../../Button/ContainButton';
import { ButtonColor, ButtonSize } from '../../Button/interface';
import { backgroundColorByStatus } from '../color';
import { CalloutProps, CalloutStatus, CalloutStatusValue } from '../interface';

const iconByStatus = {
  [CalloutStatus.DEFAULT]: <Info />,
  [CalloutStatus.SUGGEST]: <CheckCircle fillColor={green500} />,
  [CalloutStatus.WARNING]: <Alert fillColor={orange600} />,
  [CalloutStatus.DANGER]: <Alert fillColor={red600} />,
};

export class Callout extends PureComponent<Readonly<CalloutProps>> {
  public static defaultProps: Partial<CalloutProps> = {
    status: CalloutStatus.DEFAULT,
  };

  public render() {
    const { title, icon, status, className, children, action } = this.props;
    return (
      <Container status={status} className={className}>
        <Title>
          <Icon>{icon && status === CalloutStatus.DEFAULT ? icon : iconByStatus[status]}</Icon>
          {title}
        </Title>
        <Content>{children}</Content>
        {action && (
          <StyledButton size={ButtonSize.SMALL} color={ButtonColor.WHITE} {...action}>
            {action.content}
          </StyledButton>
        )}
      </Container>
    );
  }
}

const Container = styled.div<{
  status: CalloutStatusValue;
}>`
  padding: 16px;
  border-radius: 3px;
  background-color: ${props => backgroundColorByStatus[props.status]};
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
    width: 18px;
    height: 18px;
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
