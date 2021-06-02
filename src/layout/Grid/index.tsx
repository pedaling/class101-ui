import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { media } from '../../core/BreakPoints';
import { HTMLDivProps } from '../../interfaces/props';

interface Props {
  maxWidthNone?: boolean;
  className?: string;
  divAttributes?: HTMLDivProps;
}

export class Grid extends PureComponent<Props> {
  public render() {
    const {
      children, className, divAttributes, maxWidthNone,
    } = this.props;

    return (
      <StyledDiv maxWidthNone={maxWidthNone} className={className} {...divAttributes}>
        {children}
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div<Props>`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  ${media.sm`
    margin-left: 24px;
    margin-right: 24px;
  `};
  ${media.lg`
    max-width: ${(props) => (props.maxWidthNone ? 'none' : '960px')};
  `};
`;
