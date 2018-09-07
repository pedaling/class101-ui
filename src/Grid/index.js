import styled from 'styled-components';
import { media } from '../BreakPoints';

const Grid = styled.div`
  position: relative;
  margin: 0 32px;
  ${media.sm`
    margin: 0 24px;
  `};
  ${media.lg`
    max-width: ${props => (props.maxWidthNone ? 'none' : '960px')};
  `};
`;

export default Grid;
