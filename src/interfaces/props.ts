import React from 'react';

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  'data-element-name'?: string;
}

// alias
export interface HTMLElementProps extends React.HTMLAttributes<HTMLElement> {}
export interface HTMLDivProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface HTMLInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export interface HTMLTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
