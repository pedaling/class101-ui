import React from 'react';
import { Icon } from '@class101/ui';

export interface IconProps {
  size?: number;
  fillColor?: string;
  accentColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Component = ({ ...props }: IconProps) => <Icon {...props} />;
