import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { media } from '../../core/BreakPoints';
import { HTMLDivProps } from '../../interfaces/props';

interface Props {
  className?: string;
  divAttributes?: HTMLDivProps;
}

export class Row extends PureComponent<Props> {
  public render() {
    const { children, divAttributes, className } = this.props;
    return (
      <StyledDiv className={className} {...divAttributes}>
        {children}
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  margin-right: -12px;
  margin-left: -12px;
  ${media.sm`
    margin-right: -4px;
    margin-left: -4px;
  `};
`;
