import { Badge } from 'components/Badge';
import { LinkBlock } from 'core';
import { gray700, gray50, gray900 } from 'core/Colors';
import { caption1, body2 } from 'core/TextStyles';
import { ChevronDownIcon } from 'Icon';
import pathToRegexp from 'path-to-regexp';
import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { NavigationSectionItem, NavigationSectionAction, NavigationSectionSubItem } from '../Navigation.type';

export interface NavigationSectionProps {
  title?: string;
  items: NavigationSectionItem[];
  action?: NavigationSectionAction;
}

interface InjectedProps extends NavigationSectionProps {
  pathname?: string;
  onClickLink?: (url: string) => void;
}

export const NavigationSection = ({
  items, title, action, pathname, onClickLink,
}: InjectedProps):JSX.Element => {
  const [prevPathName, setPrevPathName] = useState(pathname);
  const [openedSectionIndices, setOpenedSectionIndices] = useState<number[]>([]);
  const isActiveLocation = useCallback((item?: { url?: string }) => {
    if (pathname && item && item.url) {
      return !!pathToRegexp(item.url).exec(pathname);
    }
    return false;
  }, [pathname]);

  useEffect(() => {
    if (prevPathName !== pathname) {
      setPrevPathName(pathname);
      items.forEach((item, index) => {
        if (!item.subItems) {
          return;
        }
        if (item.subItems.find((subItem) => isActiveLocation(subItem))) {
          setOpenedSectionIndices([...openedSectionIndices, index]);
        }
      });
    }
  }, [isActiveLocation, items, openedSectionIndices, pathname, prevPathName]);

  const renderAddonComponent = (badgeOrComponent: React.ReactNode) => {
    let AddonComponent: React.ReactNode = badgeOrComponent;

    if (badgeOrComponent && ['string', 'number'].includes(typeof badgeOrComponent)) {
      AddonComponent = <Badge pill>{badgeOrComponent}</Badge>;
    }

    return AddonComponent;
  };

  const renderSectionItem = (item: NavigationSectionItem, index: number) => {
    const isOpened = openedSectionIndices.includes(index);

    const Element = (
      <>
        {item.icon}
        <SectionText>{item.label}</SectionText>
        {item.url || item.onClick ? (
          renderAddonComponent(item.badge)
        ) : (
          <ChevronContainer isOpened={isOpened}>
            <ChevronDownIcon size={16} />
          </ChevronContainer>
        )}
      </>
    );

    return (
      <SectionItemContainer key={index} onClick={item.onClick}>
        {item.url ? (
          <SectionLink
            to={item.url}
            external={item.external}
            onClick={handleOnClickLink(item.url)}
            active={isActiveLocation(item)}
          >
            {Element}
          </SectionLink>
        ) : (
          <SectionItem onClick={handleToggleNavLink(index)}>{Element}</SectionItem>
        )}
        {item.subItems && (
          <SubItemContainer isOpened={isOpened}>{item.subItems.map(renderSectionSubItem)}</SubItemContainer>
        )}
      </SectionItemContainer>
    );
  };

  const renderSectionSubItem = (item: NavigationSectionSubItem, index: number) => (
    <SubItem key={index}>
      <SectionLink
        to={item.url}
        external={item.external}
        onClick={handleOnClickLink(item.url)}
        active={isActiveLocation(item)}
      >
        <SectionText>{item.label}</SectionText>
        {renderAddonComponent(item.badge)}
      </SectionLink>
    </SubItem>
  );

  const handleToggleNavLink = (index: number) => () => {
    const isOpened = openedSectionIndices.includes(index);

    const nextOpenedSectionIndices = isOpened
      ? openedSectionIndices.filter((i) => i !== index)
      : [...openedSectionIndices, index];

    setOpenedSectionIndices(nextOpenedSectionIndices);
  };

  const handleOnClickLink = (url: string) => () => {
    if (onClickLink) {
      onClickLink(url);
    }
  };

  return (
    <Container>
      {title ? (
        <SectionTitleContainer onClick={action && action.onClick}>
          <SectionTitle>{title}</SectionTitle>
          {action && React.cloneElement(action.icon, { size: 16 })}
        </SectionTitleContainer>
      ) : null}
      <SectionMenu>{items.map(renderSectionItem)}</SectionMenu>
    </Container>
  );
};

export default NavigationSection;

const Container = styled.div`
  margin-top: 12px;
  border-radius: 4px;
`;

const SectionMenu = styled.ul`
  list-style: none;
  margin-bottom: 12px;
  border-radius: 4px;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
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

const SectionLink = styled(LinkBlock)<{ active: boolean }>`
  ${SectionItemStyle};
  ${({ active }) => active
    && css`
      font-weight: bold;
      color: ${gray900};
      background-color: ${gray50};

      path {
        fill: ${gray900};
      }
    `};
`;

const SectionItem = styled.div`
  ${SectionItemStyle};
`;

const SectionText = styled.span`
  ${body2};
  color: inherit;
  font-weight: inherit;
  flex: 1;
  margin: 0 8px 0 8px;
`;

const SubItemContainer = styled.ul<{ isOpened: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 28px;
  overflow: hidden;
  transform-origin: top;
  transition: opacity 0.1s ease, transform 0.26s ease;

  ${({ isOpened }) => (isOpened
    ? `
    transform: translateY(0);
    opacity: 1;
    height: auto;
  `
    : `
    transform: translateY(-40px);
    opacity: 0;
    height: 0;
  `)}
`;

const SubItem = styled.li``;

const ChevronContainer = styled.span<{ isOpened: boolean }>`
  display: flex;
  transform: rotate(${({ isOpened }) => (isOpened ? 180 : 0)}deg);
  transition: transform 0.26s ease;
`;
