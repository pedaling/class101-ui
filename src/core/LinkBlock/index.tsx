import React from 'react';
import styled from 'styled-components';

import { Link } from '../Link';

export interface LinkBlockProps {
  to: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const LinkBlock = styled(Link)<LinkBlockProps>`
  display: block;
`;
