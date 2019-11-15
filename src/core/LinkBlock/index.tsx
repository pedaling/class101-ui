import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export interface LinkBlockProps {
  to: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const httpRegExp = /^(http|https):\/\//;

export class LinkBlock extends PureComponent<LinkBlockProps> {
  public static defaultProps: Partial<LinkBlockProps> = {
    external: false,
  };

  public render() {
    const { to, external, className, onClick, children } = this.props;

    if (to.search(httpRegExp) === 0) {
      return (
        <BlockAnchor
          href={to}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={className}
          onClick={onClick}
        >
          {children}
        </BlockAnchor>
      );
    }

    return (
      <BlockLink
        to={to}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={className}
        onClick={onClick}
      >
        {children}
      </BlockLink>
    );
  }
}

const blockAnchorStyle = css`
  display: block;
  &:hover {
    color: inherit;
    text-decoration: inherit;
  }
`;

const BlockLink = styled(Link)`
  ${blockAnchorStyle};
`;

const BlockAnchor = styled.a`
  ${blockAnchorStyle};
`;
