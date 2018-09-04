import styled from 'styled-components';
import { media } from '../BreakPoints';

const Row = styled.div.attrs({ className: 'clearfix' })`
  margin-right: -12px;
  margin-left: -12px;
  ${media.sm`
    margin-right: -4px;
    margin-left: -4px;
  `};
`;

export default Row;
