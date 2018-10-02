import styled from 'styled-components';
import { media } from '../BreakPoints';

const Row = styled.div`
  zoom: 1;
  margin-right: -12px;
  margin-left: -12px;
  ${media.sm`
    margin-right: -4px;
    margin-left: -4px;
  `};

  &::before, &::after {
    content: "";
    display: table;
  }

  &::after {
    clear: both;
  }
`;

export default Row;
