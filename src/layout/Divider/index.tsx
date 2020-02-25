import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { gray000, gray800 } from '../../core/Colors';
import { ifDarkTheme } from '../../utils';

interface Props {
  className?: string;
  color?: string;
  width?: string;
}

export class Divider extends PureComponent<Props> {
  public render() {
    const { className, width, color } = this.props;
    return (
      <Container className={className} width={width}>
        <Line color={color} />
      </Container>
    );
  }
}

const Container = styled.div<Pick<Props, 'width'>>`
  ${props => (props.width ? `width: ${typeof props.width === 'number' ? `${props.width}px` : props.width}` : '')};
`;

const Line = styled.hr<{ color?: string }>`
  margin: 0 !important;
  box-shadow: inset 0px -1px 0px ${props => props.color || ifDarkTheme(gray800, gray000)};
  border: none;
  height: 1px;
`;
