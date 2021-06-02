import * as breakPoints from './BreakPoints';
import * as colors from './Colors';
import * as darkColors from './DarkColors';
import * as elevationStyles from './ElevationStyles';
import * as textStyles from './TextStyles';
import * as ouiTextStyles from './OUITextStyles';

// MEMO: import 한 값을 변수로 할당 안 하고 바로 export할 경우 esm format 빌드할 때 rollup이 index로 이름을 바꿔버려서 output이 이상해지기 때문에 변수로 할당 한다.
const BreakPoints = breakPoints;
const Colors = colors;
const DarkColors = darkColors;
const ElevationStyles = elevationStyles;
const TextStyles = textStyles;
const OUITextStyles = ouiTextStyles;

export {
  BreakPoints, Colors, DarkColors, TextStyles, OUITextStyles, ElevationStyles,
};

export * from './GlobalStyle';
export * from './Theme';
export * from './Typography';
export * from './Position';
export * from './LinkBlock';
