export enum ThemeMode {
  dark = 'dark',
  light = 'light',
}

const dark = {
  mode: ThemeMode.dark,
};

const light = {
  mode: ThemeMode.light,
};

export interface ThemeConfig {
  mode: ThemeMode;
}

export default {
  dark,
  light,
};
