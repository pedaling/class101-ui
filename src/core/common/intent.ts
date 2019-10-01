import classNames from 'classnames';

export enum Intent {
  DANGER = 'DANGER',
  WARNING = 'WARNING',
  DEFAULT = 'DEFAULT',
}

export type IntentValue = typeof Intent[keyof typeof Intent];

export const generateIntentClassName = (className?: string, intent?: Intent) =>
  classNames(className, {
    warn: intent === Intent.WARNING,
    error: intent === Intent.DANGER,
  });
