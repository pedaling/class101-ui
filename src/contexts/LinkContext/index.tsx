import React from 'react';

export interface LinkComponentProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  /** link to */
  to: string;
  external?: boolean;
  [key: string]: any;
}

export type LinkComponent = React.ComponentType<LinkComponentProps>;

export const LinkContext = React.createContext<LinkComponent | undefined>(undefined);

LinkContext.displayName = 'Class101UILinkContext';

export const useLinkContext = () => React.useContext(LinkContext);
