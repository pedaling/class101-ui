import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Theme, ThemeConfig, ThemeMode } from '../../core';
import { gray200, gray800 } from '../../core/Colors';

interface Props {
  className?: string;
  color?: string;
  width: string;
  theme: ThemeConfig;
}

export class Divider extends PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    width: '100%',
    theme: Theme.light,
  };

  private get color() {
    const { color, theme } = this.props;
    return color || theme.mode === ThemeMode.LIGHT ? gray200 : gray800;
  }

  public render() {
    const { color } = this;
    const { className, width } = this.props;

    return (
      <Container className={className} width={width}>
        <Line color={color} />
      </Container>
    );
  }
}

const Container = styled.div<{ width: string }>`
  width: ${props => props.width};
`;

const Line = styled.div<{ color: string }>`
  width: 100%;
  height: 1px;
  box-shadow: inset 0px -1px 0px ${props => props.color};
`;
