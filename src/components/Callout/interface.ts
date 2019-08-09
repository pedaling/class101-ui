import { Omit } from '../../interfaces/props';
import { ThemeConfig } from '../../Theme';
import { ButtonProps } from '../Button/ContainButton';
import { ContainButtonColorValue, ContainButtonSizeValue } from '../Button/interface';

export type CalloutStatusValue = 'default' | 'suggest' | 'warning' | 'danger';

export enum CalloutStatus {
  DEFAULT = 'default',
  SUGGEST = 'suggest',
  WARNING = 'warning',
  DANGER = 'danger',
}

interface ShouldExcludeButtonProps {
  color: ContainButtonColorValue;
  theme: ThemeConfig;
  size: ContainButtonSizeValue;
  type: string;
}

interface ActionProps extends Omit<ButtonProps, keyof ShouldExcludeButtonProps> {
  content: string;
}

export interface CalloutProps {
  title: string;
  status: CalloutStatusValue;
  icon?: React.ReactNode;
  action?: ActionProps;
  className?: string;
}
