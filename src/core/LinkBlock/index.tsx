import React from 'react';
import styled from 'styled-components';

import { UnstyledLink } from '../../core/UnstyledLink';

export interface LinkBlockProps {
  to: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const LinkBlock = styled(UnstyledLink)<LinkBlockProps>`
  display: block;
`;
