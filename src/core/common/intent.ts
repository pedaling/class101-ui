export enum Intent {
  DANGER = 'DANGER',
  WARNING = 'WARNING',
  DEFAULT = 'DEFAULT',
}

export type IntentValue = typeof Intent[keyof typeof Intent];
