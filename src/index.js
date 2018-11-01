import { injectGlobal } from 'styled-components';

import * as Colors from './Colors';
import * as BreakPoints from './BreakPoints';
import * as TextStyles from './TextStyles';

export { default as Grid } from './Grid';
export { default as Col } from './Col';
export { default as Row } from './Row';
export { default as Card } from './Card';
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
export { default as Headline1 } from './Typography/Headline1';
export { default as Headline2 } from './Typography/Headline2';
export { default as Headline3 } from './Typography/Headline3';
export { default as Subtitle1 } from './Typography/Subtitle1';
export { default as Body1 } from './Typography/Body1';
export { default as Body2 } from './Typography/Body2';
export { default as Caption1 } from './Typography/Caption1';
export { default as Caption2 } from './Typography/Caption2';
export { default as Tiny1 } from './Typography/Tiny1';
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

  @import url(https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css);

  body {
    font-family: 'SpoqaHanSans', 'Sans-serif';
  }
`;
