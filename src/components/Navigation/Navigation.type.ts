import React from 'react';
import { BadgeProps } from 'components/Badge';
import { IconProps } from 'Icon';

export interface NavigationSectionItem {
  url?: string;
  external?: boolean;
  label: string;
  onClick?: () => void;
  icon: React.ReactElement<IconProps>;
  badge?: string | React.ReactElement<BadgeProps>;
  subItems?: NavigationSectionSubItem[];
}

export interface NavigationSectionAction {
  onClick: () => void;
  icon: React.ReactElement<IconProps>;
}

export interface NavigationSectionSubItem {
  url: string;
  label: string;
  external?: boolean;
  badge?: string | React.ReactElement<BadgeProps>;
}
