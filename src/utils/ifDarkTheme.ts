import { FlattenSimpleInterpolation } from 'styled-components';

import { ThemeMode } from '../core';

interface Theme {
  mode: ThemeMode.DARK | ThemeMode.LIGHT;
}
type ThemeObject = { theme: Theme };
type ThemeType = string | FlattenSimpleInterpolation;

const ifDarkTheme = (darkThemeStyle: ThemeType = '', fallBackStyle: ThemeType = '') => ({ theme }: ThemeObject): ThemeType => (theme.mode === ThemeMode.DARK ? darkThemeStyle : fallBackStyle);

export default ifDarkTheme;
