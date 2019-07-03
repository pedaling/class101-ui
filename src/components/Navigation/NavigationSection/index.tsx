import pathToRegexp from 'path-to-regexp';
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { NavigationSectionAction, NavigationSectionItem, NavigationSectionSubItem } from '..';
import Badge from '../../../Badge';
import { gray50, gray700, gray900 } from '../../../Colors';
import { ChevronDown } from '../../../Icon';
import { body2, caption1 } from '../../../TextStyles';

export interface NavigationSectionProps {
  title?: string;
  items: NavigationSectionItem[];
  action?: NavigationSectionAction;
}

interface InjectedProps extends NavigationSectionProps {
  pathname: string;
  onClickLink?: (url: string) => any;
}

interface State {
  openedSectionIndices: number[];
  pathname: string;
}

export class NavigationSection extends React.PureComponent<InjectedProps, State> {
  public static isActiveLocation = (pathname: string, item?: { url?: string }) => {
    if (item && item.url) {
      return !!pathToRegexp(item.url).exec(pathname);
    }
    return false;
  };

  public static getDerivedStateFromProps = (prevProps: InjectedProps, prevState: State) => {
    if (prevProps.pathname !== prevState.pathname) {
      const { openedSectionIndices } = prevState;
      prevProps.items.forEach((item, index) => {
        if (!item.subItems) {
          return;
        }
        if (item.subItems.find(item => NavigationSection.isActiveLocation(prevProps.pathname, item))) {
          openedSectionIndices.push(index);
        }
      });
      return { openedSectionIndices, pathname: prevProps.pathname };
    }

    return null;
  };

  public state: State = {
    pathname: '',
    openedSectionIndices: [],
  };

  public render() {
    const { items, title, action } = this.props;

    return (
      <Container>
        {title ? (
          <SectionTitleContainer onClick={action && action.onClick}>
            <SectionTitle>{title}</SectionTitle>
            {action && React.cloneElement(action.icon, { size: 16 })}
          </SectionTitleContainer>
        ) : null}
        {items.map(this.renderSectionItem)}
      </Container>
    );
  }

  private renderAddonComponent = (badgeOrComponent: React.ReactNode) => {
    let AddonComponent: React.ReactNode = badgeOrComponent;

    if (badgeOrComponent && ['string', 'number'].includes(typeof badgeOrComponent)) {
      AddonComponent = <Badge pill>{badgeOrComponent}</Badge>;
    }

    return AddonComponent;
  };

  private renderSectionItem = (item: NavigationSectionItem, index: number) => {
    const { pathname } = this.props;
    const isOpened = this.state.openedSectionIndices.indexOf(index) >= 0;

    const Element = (
      <>
        {item.icon}
        <SectionText>{item.label}</SectionText>
        {item.url || item.onClick ? (
          this.renderAddonComponent(item.badge)
        ) : (
          <ChevronContainer isOpened={isOpened}>
            <ChevronDown size={16} />
          </ChevronContainer>
        )}
      </>
    );

    return (
      <SectionItemContainer key={index} onClick={item.onClick}>
        {item.url ? (
          <SectionLink
            to={item.url}
            onClick={this.handleOnClickLink(item.url)}
            active={NavigationSection.isActiveLocation(pathname, item)}
          >
            {Element}
          </SectionLink>
        ) : (
          <SectionItem onClick={this.handleToggleNavLink(index)}>{Element}</SectionItem>
        )}
        {item.subItems && (
          <SubItemContainer isOpened={isOpened}>{item.subItems.map(this.renderSectionSubItem)}</SubItemContainer>
        )}
      </SectionItemContainer>
    );
  };

  private renderSectionSubItem = (item: NavigationSectionSubItem, index: number) => {
    const { pathname } = this.props;

    return (
      <SectionLink
        key={index}
        to={item.url}
        onClick={this.handleOnClickLink(item.url)}
        active={NavigationSection.isActiveLocation(pathname, item)}
      >
        <SectionText>{item.label}</SectionText>
        {this.renderAddonComponent(item.badge)}
      </SectionLink>
    );
  };

  private handleToggleNavLink = (index: number) => () => {
    const { openedSectionIndices } = this.state;
    const isOpened = this.state.openedSectionIndices.indexOf(index) >= 0;

    const nextOpenedSectionIndices = isOpened
      ? openedSectionIndices.filter(i => i !== index)
      : [...openedSectionIndices, index];

    this.setState({
      openedSectionIndices: nextOpenedSectionIndices,
    });
  };

  private handleOnClickLink = (url: string) => () => {
    const { onClickLink } = this.props;

    if (onClickLink) {
      onClickLink(url);
    }
  };
}

export default (NavigationSection as any) as React.ComponentClass<NavigationSectionProps>;

const Container = styled.ul`
  margin: 12px 0;
  border-radius: 4px;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
`;

const SectionTitle = styled.span`
  ${caption1};
  font-size: 12px;
  flex: 1;
  font-weight: bold;
`;

const SectionItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
`;

const SectionItemStyle = css`
  z-index: 1;
  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  color: ${gray700};
  path {
    fill: ${gray700};
  }
  &:hover {
    background-color: ${gray50};
  }
`;

const SectionLink = styled(Link)<{ active: boolean }>`
  ${SectionItemStyle};
  ${props =>
    props.active
      ? css`
    font-weight: bold;
    color: ${gray900};
    background-color: ${gray50};

    path {
      fill: ${gray900};
    }
  }`
      : ''};
`;

const SectionItem = styled.div`
  ${SectionItemStyle}
`;

const SectionText = styled.span`
  ${body2};
  color: inherit;
  font-weight: inherit;
  flex: 1;
  margin: 0 8px 0 8px;
`;

const SubItemContainer = styled.ul<{ isOpened: boolean }>`
  margin: 0;
  padding: 0;
  padding-left: 28px;
  transform: translateY(${props => (props.isOpened ? 0 : -40)}px);
  height: ${props => (props.isOpened ? 'auto' : 0)};
  transform-origin: top;
  transition: transform 0.26s ease;
  overflow: hidden;
`;

const ChevronContainer = styled.span<{ isOpened: boolean }>`
  display: flex;
  transform: rotate(${props => (props.isOpened ? 180 : 0)}deg);
  transition: transform 0.26s ease;
`;
