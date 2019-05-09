import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { BreakPoints, HTMLDivProps } from '../internal';

const { media } = BreakPoints;

const sizeToPercent = (size?: number) => ((size !== undefined ? size : 12) / 12) * 100;
const getValidOffset = (offsets: (number | undefined)[]) => {
  for (const offset of offsets) {
    if (offset !== undefined) {
      return offset;
    }
  }
};

const marginLeftStyle = (offsets: (number | undefined)[]) => {
  const offset = getValidOffset(offsets);
  if (offset === undefined) {
    return '';
  }
  return css<{
    smOffset?: number;
    mdOffset?: number;
    lgOffset?: number;
  }>`
    margin-left: ${sizeToPercent(offset)}%;
  `;
};

interface StyleProps {
  sm?: number;
  md?: number;
  lg?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
}
interface Props extends StyleProps {
  className?: string;
  divAttributes?: HTMLDivProps;
}

export class Col extends PureComponent<Props> {
  public render() {
    const { divAttributes, ...restProps } = this.props;
    return <StyledDiv {...divAttributes} {...restProps} />;
  }
}

const StyledDiv = styled.div<StyleProps>`
  position: relative;
  min-height: 1px;
  padding-right: 12px;
  padding-left: 12px;
  box-sizing: border-box;
  ${media.sm<StyleProps>`
    width: ${props => sizeToPercent(props.sm)}%;
    padding-right: 4px;
    padding-left: 4px;
    ${props => marginLeftStyle([props.smOffset])}
  `}

  ${media.md<StyleProps>`
    width: ${props => sizeToPercent(props.md || props.sm)}%;
    ${props => marginLeftStyle([props.mdOffset, props.smOffset])};
  `}

  ${media.lg<StyleProps>`
    width: ${props => sizeToPercent(props.lg || props.md || props.sm)}%;
    ${props => marginLeftStyle([props.lgOffset, props.mdOffset, props.smOffset])};
  `};
`;
