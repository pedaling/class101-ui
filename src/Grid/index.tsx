import React from 'react';
import styled from 'styled-components';

import { media } from '../BreakPoints';
import { HTMLDivProps } from '../interfaces/props';

interface Props extends HTMLDivProps {
  marginTop?: number | string;
  marginBottom?: number | string;
  maxWidthNone?: boolean;
}

const StyledDiv = styled.div<Props>`
  position: relative;
  ${props =>
    props.marginTop &&
    `
      margin-top: ${typeof props.marginTop === 'number' ? `${props.marginTop}px` : props.marginTop};
    `}
  ${props =>
    props.marginBottom &&
    `
      margin-bottom: ${typeof props.marginBottom === 'number' ? `${props.marginBottom}px` : props.marginBottom};
    `}
  margin-left: auto;
  margin-right: auto;
  ${media.sm`
    margin-left: 24px;
    margin-right: 24px;
  `};
  ${media.lg`
    max-width: ${props => (props.maxWidthNone ? 'none' : '960px')};
  `};
`;

export default class Grid extends React.PureComponent<Props> {
  public render() {
    const { children, ...restProps } = this.props;

    return <StyledDiv {...restProps}>{children}</StyledDiv>;
  }
}
