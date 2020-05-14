import { gray100, gray900, orange600, red600, white } from '../../core/Colors';
import { ThemeConfig, ThemeMode } from '../../core/Theme';

export const getTabBorderColor = (theme: ThemeConfig) => {
  return theme.mode === ThemeMode.LIGHT ? gray100 : gray900;
};

export const getTabActiveColorByType = (theme: ThemeConfig) => ({
  default: theme.mode === ThemeMode.LIGHT ? gray900 : white,
  red: red600,
  orange: orange600,
});
