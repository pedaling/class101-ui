// @flow
import React from 'react';
import styled from 'styled-components';
import { media } from '../BreakPoints';

export type Props = {
  lg?: number,
  sm?: number,
  smOffset?: number,
  mdOffset?: number,
  lgOffset?: number,
};

const sizeToPercent = (size: number) => (((size || 12) / 12) * 100);

const Col = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 12px;
  padding-left: 12px;
  float: left;
  box-sizing: border-box;

  ${media.sm`
    width: ${props => sizeToPercent(props.sm)}%;
    padding-right: 4px;
    padding-left: 4px;
    ${props => 
      props.smOffset && 
      `margin-left: ${sizeToPercent(props.smOffset)}%`}
  `};

  ${media.md`
    width: ${props => sizeToPercent(props.md || props.sm)}%;
    ${props => 
      (props.mdOffset || props.smOffset) && 
      `margin-left: ${sizeToPercent(props.mdOffset || props.smOffset)}%`}
  `};

  ${media.lg`
    width: ${props => sizeToPercent(props.lg || props.md || props.sm)}%;
    ${props => 
      (props.lgOffset || props.mdOffset || props.smOffset) && 
      `margin-left: ${sizeToPercent(props.lgOffset || props.mdOffset || props.smOffset)}%`}
  `};
`;

export default ({
  lg,
  sm,
  smOffset,
  mdOffset,
  lgOffset,
  ...restProps,
}: Props) => (<Col 
  lg={ lg }
  sm={ sm }
  smOffset={ smOffset }
  mdOffset={ mdOffset }
  lgOffset={ lgOffset }
  { ...restProps }
/>);