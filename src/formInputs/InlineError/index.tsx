import React from 'react';
import styled from 'styled-components';

import { gray600, orange500, redError } from '../../core/Colors';
import { Alert, IconProps } from '../../Icon';

export enum Intent {
  DANGER = 'DANGER',
  WARNING = 'WARNING',
  DEFAULT = 'DEFAULT',
}

const ColorByIntent: { [key in Intent]: string } = {
  [Intent.DANGER]: redError,
  [Intent.WARNING]: orange500,
  [Intent.DEFAULT]: gray600,
};

export interface InlineErrorProps {
  intent?: Intent;
  children: React.ReactNode;
  icon?: React.ReactElement<IconProps> | null;
}

export class InlineError extends React.PureComponent<InlineErrorProps> {
  public static defaultProps: Partial<InlineErrorProps> = {
    intent: Intent.DEFAULT,
    icon: <Alert size={16} />,
  };
  public render() {
    const { icon, children, intent = Intent.DEFAULT } = this.props;

    return (
      <Container intent={intent}>
        {icon}
        <Message>{children}</Message>
      </Container>
    );
  }
}

const Container = styled.h6<{ intent: Intent }>`
  display: flex;
  align-items: center;
  margin: 2px 0;
  color: ${props => ColorByIntent[props.intent]};
  path {
    fill: ${props => ColorByIntent[props.intent]};
  }
`;

const Message = styled.span`
  font-size: 11px;
  line-height: 16px;
  font-weight: normal;
  display: flex;

  * + & {
    margin-left: 2px;
  }
`;
