import React, { FC, ReactNode } from 'react';

import { LinkComponent, LinkContext } from '../../contexts';

interface Props {
  children?: ReactNode;
  linkComponent?: LinkComponent;
}
export const Class101UIProvider: FC<Props> = ({ children, linkComponent }) => <LinkContext.Provider value={linkComponent}>{children}</LinkContext.Provider>;
