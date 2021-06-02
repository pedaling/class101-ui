import React from 'react';

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  'data-element-name'?: string;
}

// alias
export type HTMLElementProps = React.HTMLAttributes<HTMLElement>
export type HTMLDivProps = React.HTMLAttributes<HTMLDivElement>
export type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>
export type HTMLTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
