import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Colors, Theme, ThemeConfig, ThemeMode } from '../../core';

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
    return color || theme.mode === ThemeMode.LIGHT ? Colors.gray200 : Colors.gray800;
  }

  public render() {
    const { className, width } = this.props;

    return (
      <Container className={className} width={width}>
        <Line color={this.color} />
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
