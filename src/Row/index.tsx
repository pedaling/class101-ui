import React from 'react';
import styled from 'styled-components';

import { media } from '../BreakPoints';
import { HTMLDivProps } from '../interfaces/props';

interface Props extends HTMLDivProps {
  marginTop?: number | string;
  marginBottom?: number | string;
}

const StyledDiv = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
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
  margin-right: -12px;
  margin-left: -12px;
  ${media.sm`
    margin-right: -4px;
    margin-left: -4px;
  `};
`;

export default class Row extends React.PureComponent<Props> {
  public render() {
    const { children, ...restProps } = this.props;
    return <StyledDiv {...restProps}>{children}</StyledDiv>;
  }
}
