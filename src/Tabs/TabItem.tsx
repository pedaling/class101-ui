import React, { PureComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { gray600 } from '../Colors';
import { body2, caption1 } from '../TextStyles';
import { ThemeConfig } from '../Theme';
import { getTabActiveColorByType } from './utils';

export type TabType = 'default' | 'red' | 'orange';

export interface TabStyleProps {
  theme: ThemeConfig;
  type: TabType;
}

export interface TabItemProps extends TabStyleProps {
  title?: string;
  active?: boolean;
  caption?: ReactNode;
  panel?: ReactNode;
  value: string;
  fluid: boolean;
  indicatorCount: number;
  onClickItem?: (value: string) => any;
  renderIndicator?: () => ReactNode;
}

export default class TabItem extends PureComponent<TabItemProps> {
  public render() {
    const { active, indicatorCount, fluid, theme, type } = this.props;

    return (
      <TabBox
        onClick={this.handleClick}
        active={active}
        theme={theme}
        type={type}
        fluid={fluid}
        indicatorCount={indicatorCount}
      >
        {this.renderIndicator()}
      </TabBox>
    );
  }

  private renderIndicator = () => {
    const { title, caption, active, theme, type, value, renderIndicator } = this.props;

    if (renderIndicator) {
      return renderIndicator();
    }

    return (
      <>
        <TabName active={active} theme={theme} type={type}>
          {title || value}
        </TabName>
        {caption && (
          <TabCaption active={active} theme={theme} type={type}>
            {caption}
          </TabCaption>
        )}
      </>
    );
  };

  private handleClick = () => {
    const { value, onClickItem } = this.props;
    if (onClickItem) {
      onClickItem(value);
    }
  };
}

interface TabBosProps extends TabStyleProps {
  indicatorCount: number;
  fluid: boolean;
  active?: boolean;
}

const TabBox = styled.div<TabBosProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px 13px 4px;
  ${props =>
    props.fluid
      ? `
    flex-basis: auto;
    margin-right: 26px;
    `
      : `
    flex-basis: ${100 / props.indicatorCount}%;
    margin-right: 0;
    `};
  cursor: pointer;
  position: relative;
  &:before {
    position: absolute;
    bottom: 0;
    left: 50%;
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${props => getTabActiveColorByType(props.theme)[props.type]};
    transform: translateX(-50%) scaleX(0);
    transition: transform 0.25s cubic-bezier(0.5, 0, 0.75, 0.72);
  }
  ${props =>
    props.active
      ? css`
          color: ${getTabActiveColorByType(props.theme)[props.type]};
          &:before {
            transform: translateX(-50%) scaleX(1);
          }
        `
      : `
        color: ${gray600}
    `};
`;

interface TabIndicatorProps extends TabStyleProps {
  active?: boolean;
}

const TabName = styled.div<TabIndicatorProps>`
  ${body2};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.1s ease-out;
  ${props =>
    props.active
      ? css`
          color: ${getTabActiveColorByType(props.theme)[props.type]};
          font-weight: bold;
        `
      : `
        color: ${gray600};
      `};
`;

const TabCaption = styled.span<TabIndicatorProps>`
  ${caption1};
  margin-left: 4px;
  color: ${props => (props.active ? getTabActiveColorByType(props.theme)[props.type] : gray600)};
`;
