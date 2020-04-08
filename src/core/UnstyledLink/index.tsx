import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { useLinkContext } from '../../contexts';

export interface UnstyledLinkProps {
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  to: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const httpRegExp = /^(http|https):\/\//;

export const UnstyledLink = React.memo(
  React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>((props, ref) => {
    const LinkComponent = useLinkContext();

    const { to, external, ...restProps } = props;

    const shouldNewTabOpen = external || props.to.search(httpRegExp) !== -1;

    const externalAttributes = {
      ...(shouldNewTabOpen && { target: '_blank', rel: 'noopener noreferrer' }),
    };

    if (LinkComponent) {
      return <LinkComponent ref={ref} {...externalAttributes} {...props} />;
    }

    return <Anchor ref={ref} href={props.to} {...externalAttributes} {...restProps} />;
  })
);

const Anchor = styled.a`
  &:hover {
    color: inherit;
    text-decoration: inherit;
  }
`;
