import { Tab, Theme, ThemeConfig } from '@class101/ui';
import React, { HTMLAttributes, ReactNode } from 'react';

interface Props {
  tabs: {
    value: string | number;
    title: string;
    badge?: ReactNode;
  }[];
  theme: ThemeConfig;
  type: 'default' | 'red' | 'orange';
  currentValue: string | number;
  fluid: boolean;
  className?: string;
  onTabChange?: (value: string | number) => void;
  divAttributes?: HTMLAttributes<HTMLDivElement>;
  children?: ReactNode;
}

export const Component = (props: Props) => <Tab />;

Tab.defaultProps = {
  fluid: true,
  type: 'default',
  theme: Theme.light,
};
