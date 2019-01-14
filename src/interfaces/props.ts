import React from 'react';

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// alias
export interface HTMLDivProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface HTMLInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
