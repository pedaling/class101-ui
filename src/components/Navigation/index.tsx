import React from 'react';
import styled from 'styled-components';

import { media } from '../../core/BreakPoints';
import { gray100 } from '../../core/Colors';
import { HTMLElementProps } from '../../interfaces/props';

interface Props {
  pathname?: string;
  className?: string;
  divAttributes?: HTMLElementProps;
  'data-element-name'?: string;
  children?: JSX.Element;
  onClickLink?: (url: string) => void;
}

const Navigation = ({
  children,
  pathname = '/',
  divAttributes,
  className,
  onClickLink,
  'data-element-name': dataElementName,
}: Props): JSX.Element => (
  <Container {...divAttributes} className={className} data-element-name={dataElementName}>
    {React.Children.map(children, (child) => child && React.cloneElement(child, { pathname, onClickLink }))}
  </Container>
);

const NavigationDivider = styled.hr`
  margin: -8px 0;
  border: 0;
  border-bottom: 1px solid ${gray100};
`;

export {
  Navigation,
  NavigationDivider,
};

const Container = styled.nav`
  background-color: white;
  padding: 1px 12px;
  ${media.sm`
    max-width: 100%;
  `}
  max-width: 240px;
`;
