import styled, { css } from 'styled-components';

import { media } from '../BreakPoints';
import { HTMLDivProps } from '../interfaces/props';

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

interface ColProps extends HTMLDivProps {
  sm?: number;
  md?: number;
  lg?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
}

const Col = styled.div<ColProps>`
  position: relative;
  min-height: 1px;
  padding-right: 12px;
  padding-left: 12px;
  box-sizing: border-box;
  ${media.sm<ColProps>`
    width: ${props => sizeToPercent(props.sm)}%;
    padding-right: 4px;
    padding-left: 4px;
    ${props => marginLeftStyle([props.smOffset])}
  `}

  ${media.md`
    width: ${props => sizeToPercent(props.md || props.sm)}%;
    ${props => marginLeftStyle([props.mdOffset, props.smOffset])};
  `}

  ${media.lg`
    width: ${props => sizeToPercent(props.lg || props.md || props.sm)}%;
    ${props => marginLeftStyle([props.lgOffset, props.mdOffset, props.smOffset])};
  `};
`;

export default Col;
