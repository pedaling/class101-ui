import * as React from 'react';
import styled from 'styled-components';

import { BadgeProps } from '../../Badge';
import { media } from '../../BreakPoints';
import { gray100 } from '../../Colors';
import { IconProps } from '../../Icon';
import { HTMLDivProps } from '../../interfaces/props';
import NavigationSection from './NavigationSection';

export interface NavigationSectionAction {
  onClick: () => any;
  icon: React.ReactElement<IconProps>;
}

export interface NavigationSectionSubItem {
  url: string;
  label: string;
  badge?: string | React.ReactElement<BadgeProps>;
}

export interface NavigationSectionItem {
  url?: string;
  label: string;
  icon: React.ReactElement<IconProps>;
  badge?: string | React.ReactElement<BadgeProps>;
  subItems?: NavigationSectionSubItem[];
}

interface Props {
  location?: string;
  className?: string;
  divAttributes?: HTMLDivProps;
}

const Divider = styled.hr`
  margin: -8px 0;
  border: 0;
  border-bottom: 1px solid ${gray100};
`;

export default class Navigation extends React.PureComponent<Props> {
  public static Section = NavigationSection;
  public static Divider = Divider;
  public static defaultProps: Partial<Props> = {
    location: '/',
  };

  public render() {
    const { children, divAttributes, className } = this.props;
    return (
      <Container {...divAttributes} className={className}>
        {children}
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
