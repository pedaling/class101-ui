import { gray100, gray800, orange600, red600, white } from '../Colors';
import { ThemeConfig, ThemeMode } from '../Theme';

export const getTabBorderColor = (theme: ThemeConfig) => {
  return theme.mode === ThemeMode.light ? gray100 : gray800;
};

export const getTabActiveColorByType = (theme: ThemeConfig) => ({
  default: theme.mode === ThemeMode.light ? gray800 : white,
  red: red600,
  orange: orange600,
});
