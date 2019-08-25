export enum ThemeMode {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

export interface ThemeConfig {
  mode: ThemeMode;
}

const dark: ThemeConfig = {
  mode: ThemeMode.DARK,
};

const light: ThemeConfig = {
  mode: ThemeMode.LIGHT,
};

export const Theme = {
  dark,
  light,
};
