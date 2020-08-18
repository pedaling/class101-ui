import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { useLinkContext } from '../../contexts';

export interface LinkProps {
  children?: React.ReactNode;
  className?: string;
  external?: boolean;
  to: string;
  'data-element-name'?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const httpRegExp = /^(http|https):\/\//;

export const Link = React.memo(
  React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
    const LinkComponent = useLinkContext();

    const { to, external, ...restProps } = props;

    const shouldOpenNewTab = external || props.to.search(httpRegExp) !== -1;

    // NOTE: noreferrer의 사용은 noreferrer noopener을 함께 사용하는 것과 같은 동작을 하며
    // https://html.spec.whatwg.org/multipage/links.html#link-type-noreferrer
    // noreferrer만 사용하는 것이 window.opener 값을 null로 바꾸는 브라우저 테스트에서 더 많이 성공합니다.
    // https://github.com/yannickcr/eslint-plugin-react/issues/2022#issuecomment-526320768
    const externalAttributes = {
      ...(shouldOpenNewTab && { target: '_blank', rel: 'noreferrer' }),
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
