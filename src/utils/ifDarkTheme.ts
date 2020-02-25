import { FlattenSimpleInterpolation } from 'styled-components';

import { ThemeMode } from '../core';

interface Theme {
  mode: ThemeMode.DARK | ThemeMode.LIGHT;
}

export const ifDarkTheme = (
  darkThemeStyle?: string | FlattenSimpleInterpolation,
  fallBackStyle: string | FlattenSimpleInterpolation = ''
) => ({ theme }: { theme: Theme }) => {
  return theme.mode === ThemeMode.DARK ? darkThemeStyle : fallBackStyle;
};
