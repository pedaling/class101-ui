import styled from 'styled-components';
import { media } from '../BreakPoints';

const sizeToPercent = (size: number) => (((size || 12) / 12) * 100);

const Col = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 12px;
  padding-left: 12px;
  float: left;

  ${props => props.sm && media.sm`
    width: ${props => sizeToPercent(props.sm)}%;
    padding-right: 4px;
    padding-left: 4px;
  `};

  ${props => props.md && media.md`
    width: ${props => sizeToPercent(props.md || props.sm)}%;
  `};

  ${props => props.lg && media.lg`
    width: ${props => sizeToPercent(props.lg || props.md || props.sm)}%;
  `};
`;

export default Col;
