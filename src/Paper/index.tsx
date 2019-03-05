import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { ElevationProps, elevationStyleByElevation } from '../ElevationStyle';
import { HTMLDivProps } from '../interfaces/props';
import defaultTo from '../utils/defaultTo';

interface StyleProps extends ElevationProps {
  borderRadius?: number;
}

interface Props extends StyleProps {
  htmlDivAttributes: HTMLDivProps;
}

const Container = styled.div<StyleProps & HTMLDivProps>`
  border-radius: ${props => defaultTo(props.borderRadius, 1)}px;
  background-color: white;
  ${props => elevationStyleByElevation[defaultTo(props.elevation, 1)]}
`;

export default class Paper extends PureComponent<Props> {
  public defaultProps = {
    borderRadius: 1,
    elevation: 1,
  };

  public render() {
    const { children, htmlDivAttributes, ...restProps } = this.props;

    return (
      <Container {...htmlDivAttributes} {...restProps}>
        {children}
      </Container>
    );
  }
}
