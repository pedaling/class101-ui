import React from 'react';

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// alias
export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>;
