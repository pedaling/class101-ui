import React, { PureComponent } from 'react';
import styled from 'styled-components';

import elevationStyles, { ElevationProps } from '../ElevationStyle';
import { HTMLDivProps } from '../interfaces/props';

interface PaperProps extends ElevationProps {
  borderRadius?: 1 | 2 | 3 | 4;
}

const Container = styled.div<PaperProps>`
  border-radius: ${props => props.borderRadius || 1}px;
  background-color: white;
  ${props => elevationStyles[props.elevation === undefined ? 4 : props.elevation]}
`;

export default class Paper extends PureComponent<PaperProps & HTMLDivProps> {
  public defaultProps = {
    borderRadius: 1,
  };

  public render() {
    const { elevation, children, ...restProps } = this.props;

    return (
      <Container elevation={elevation} {...restProps}>
        {children}
      </Container>
    );
  }
}
