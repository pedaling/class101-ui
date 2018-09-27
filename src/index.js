import { injectGlobal } from 'styled-components';

import * as Colors from './Colors';
import * as BreakPoints from './BreakPoints';
import * as TextStyles from './TextStyles';

export { default as Grid } from './Grid';
export { default as Col } from './Col';
export { default as Row } from './Row';
export { default as Spinner } from './Spinner';
export { default as ProgressBar } from './ProgressBar';
export { default as ProgressState } from './ProgressState';
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Textarea } from './Textarea';
export { default as BottomSheet } from './BottomSheet';
export { default as Badge } from './Badge';
export { default as FormGroup } from './FormGroup';
export { default as ControlGroup } from './ControlGroup';
export { Colors, BreakPoints, TextStyles };

injectGlobal`
  @font-face {
    font-family: 'SpoqaHanSans';
    font-weight: 700;
    src: local('Spoqa Han Sans Bold'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansBold.woff2') format('woff2'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansBold.woff') format('woff'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SpoqaHanSans';
    font-weight: 400;
    src: local('Spoqa Han Sans Regular'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansRegular.woff2') format('woff2'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansRegular.woff') format('woff'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansRegular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SpoqaHanSans';
    font-weight: 300;
    src: local('Spoqa Han Sans Light'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansLight.woff2') format('woff2'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansLight.woff') format('woff'),
    url('https://cdn.rawgit.com/spoqa/spoqa-han-sans/01ff0283/Subset/SpoqaHanSans/SpoqaHanSansLight.ttf') format('truetype');
  }

  body {
    font-family: 'SpoqaHanSans', 'Sans-serif';
  }
`;
