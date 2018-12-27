import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '../BreakPoints';

interface Props {
  marginTop?: number | string;
  marginBottom?: number | string;
}

const Row = styled.div<Props>`
  zoom: 1;
  ${props =>
    props.marginTop &&
    css`
      margin-top: ${typeof props.marginTop === 'number' ? `${props.marginTop}px` : props.marginTop};
    `}
  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: ${typeof props.marginBottom === 'number' ? `${props.marginBottom}px` : props.marginBottom};
    `}
  margin-right: -12px;
  margin-left: -12px;
  ${media.sm`
    margin-right: -4px;
    margin-left: -4px;
  `};

  &::before,
  &::after {
    content: '';
    display: table;
  }

  &::after {
    clear: both;
  }
`;

export default ({ ...restProps }: Props) => <Row {...restProps} />;
