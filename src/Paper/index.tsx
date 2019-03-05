import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { ElevationProps, elevationStyleByElevation } from '../ElevationStyle';
import { HTMLDivProps } from '../interfaces/props';
import defaultTo from '../utils/defaultTo';

interface PaperProps extends ElevationProps {
  borderRadius?: number;
}

const Container = styled.div<PaperProps>`
  border-radius: ${props => defaultTo(props.borderRadius, 1)}px;
  background-color: white;
  ${props => elevationStyleByElevation[defaultTo(props.elevation, 4)]}
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
