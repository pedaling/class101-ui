import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { gray500, orange500, redError } from '../../core/Colors';
import { Intent, IntentValue } from '../../core/common/intent';
import { caption2 } from '../../core/TextStyles';
import { Alert, IconProps } from '../../Icon';

const ColorByIntent: { [key in Intent]: string } = {
  [Intent.DANGER]: redError,
  [Intent.WARNING]: orange500,
  [Intent.DEFAULT]: gray500,
};

export interface InlineErrorProps {
  intent?: IntentValue;
  icon?: React.ReactElement<IconProps> | null;
  children: React.ReactNode;
}

export class InlineError extends PureComponent<InlineErrorProps> {
  public static defaultProps: Partial<InlineErrorProps> = {
    intent: Intent.DEFAULT,
    icon: <Alert size={12} />,
  };
  public render() {
    const { icon, children, intent = Intent.DEFAULT, ...restProps } = this.props;

    return (
      <Container intent={intent} {...restProps}>
        {icon}
        <Message color={ColorByIntent[intent]}>{children}</Message>
      </Container>
    );
  }
}

const Container = styled.strong<{ intent: Intent }>`
  display: flex;
  align-items: center;
  margin: 2px 0;
  font-weight: normal;

  path {
    fill: ${props => ColorByIntent[props.intent]};
  }
`;

const Message = styled.span`
  ${caption2};
  display: flex;

  * + & {
    margin-left: 2px;
  }
`;
