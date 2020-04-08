import React, { FC, ReactNode } from 'react';

import { LinkComponent, LinkContext } from '../../contexts';

interface Props {
  children?: ReactNode;
  linkComponent?: LinkComponent;
}
export const AppProvider: FC<Props> = ({ children, linkComponent }) => {
  return <LinkContext.Provider value={linkComponent}>{children}</LinkContext.Provider>;
};
