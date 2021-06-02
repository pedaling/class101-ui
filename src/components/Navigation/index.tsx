import * as React from 'react';
import styled from 'styled-components';

import { media } from '../../core/BreakPoints';
import { gray100 } from '../../core/Colors';
import { IconProps } from '../../Icon';
import { HTMLElementProps } from '../../interfaces/props';
import { BadgeProps } from '../Badge';
import NavigationSection from './NavigationSection';

export interface NavigationSectionAction {
  onClick: () => any;
  icon: React.ReactElement<IconProps>;
}

export interface NavigationSectionSubItem {
  url: string;
  label: string;
  external?: boolean;
  badge?: string | React.ReactElement<BadgeProps>;
}

export interface NavigationSectionItem {
  url?: string;
  external?: boolean;
  label: string;
  onClick?: () => any;
  icon: React.ReactElement<IconProps>;
  badge?: string | React.ReactElement<BadgeProps>;
  subItems?: NavigationSectionSubItem[];
}

interface Props {
  pathname?: string;
  className?: string;
  divAttributes?: HTMLElementProps;
  'data-element-name'?: string;
  onClickLink?: (url: string) => any;
}

const Divider = styled.hr`
  margin: -8px 0;
  border: 0;
  border-bottom: 1px solid ${gray100};
`;

export class Navigation extends React.PureComponent<Props> {
  public static Section = NavigationSection;

  public static Divider = Divider;

  public static defaultProps: Partial<Props> = {
    pathname: '/',
  };

  public render() {
    const {
      children,
      pathname,
      divAttributes,
      className,
      onClickLink,
      'data-element-name': dataElementName,
    } = this.props;

    return (
      <Container {...divAttributes} className={className} data-element-name={dataElementName}>
        {React.Children.map(
          children,
          (child) => child && React.cloneElement(child as React.ReactElement<any>, { pathname, onClickLink }),
        )}
      </Container>
    );
  }
}

const Container = styled.nav`
  background-color: white;
  padding: 1px 12px;
  ${media.sm`
    max-width: 100%;
  `}
  max-width: 240px;
`;
