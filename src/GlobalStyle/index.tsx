import { createGlobalStyle } from 'styled-components';

import swiperStyle from './swiperDefaultStyle';

export default createGlobalStyle`
  ${swiperStyle};
  a {
    text-decoration: none;
    color: inherit;
  }
  p, ul {
    padding: 0;
    margin: 0
  }
`;
