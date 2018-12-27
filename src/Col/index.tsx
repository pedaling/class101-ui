import styled, { css } from 'styled-components';
import { media } from '../BreakPoints';

const sizeToPercent = (size?: number) => ((size || 12) / 12) * 100;

interface ColProps {
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
  float: left;
  box-sizing: border-box;
  ${media.sm<ColProps>`
    width: ${props => sizeToPercent(props.sm)}%;
    padding-right: 4px;
    padding-left: 4px;
    ${props =>
      props.smOffset &&
      css`
        margin-left: ${sizeToPercent(props.smOffset)}%;
      `}
  `}

  ${media.md`
    width: ${props => sizeToPercent(props.md || props.sm)}%;
    ${props =>
      (props.mdOffset || props.smOffset) &&
      css`
        margin-left: ${sizeToPercent(props.mdOffset || props.smOffset)}%;
      `}
  `}

  ${media.lg`
    width: ${props => sizeToPercent(props.lg || props.md || props.sm)}%;
    ${props =>
      (props.lgOffset || props.mdOffset || props.smOffset) &&
      css`
        margin-left: ${sizeToPercent(props.lgOffset || props.mdOffset || props.smOffset)}%;
      `}
  `};
`;

export default Col;
