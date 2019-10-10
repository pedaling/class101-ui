import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { Colors } from '../../core';


interface Props {
  className?: string;
  color: string;
  width: number | string;
}

export class Divider extends PureComponent<Props> {
  public static defaultProps: Props = {
    color: Colors.gray200,
    width: '100%',
  };

  public render() {
    const { className, width, color } = this.props;

    return (
      <Container className={className} width={width}>
        <Line color={color} />
      </Container>
    );
  }
}

const Container = styled.div<{ width: number | string }>`
  width: ${props => props.width};
`;

const Line = styled.div<{ color: string }>`
  width: 100%;
  height: 1px;
  box-shadow: inset 0px -1px 0px ${props => props.color};
`;
