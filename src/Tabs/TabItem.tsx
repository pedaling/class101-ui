import React, { PureComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { gray600 } from '../Colors';
import { body2, caption1 } from '../TextStyles';
import Theme, { ThemeConfig } from '../Theme';
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
  indicatorCount?: number;
  onClickItem?: (value: string) => any;
  renderIndicator?: () => ReactNode;
}

export default class TabItem extends PureComponent<TabItemProps> {
  public static defaultProps = {
    fluid: true,
    type: 'default',
    theme: Theme.light,
  };
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

interface TabBoxProps extends TabStyleProps {
  fluid: boolean;
  active?: boolean;
  indicatorCount?: number;
}

const TabBox = styled.div<TabBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0 13px;
  ${props =>
    props.fluid
      ? `
    flex-basis: auto;
    margin-right: 24px;
    `
      : `
    flex-basis: ${100 / (props.indicatorCount || 1)}%;
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
    height: 3px;
    background-color: ${props => getTabActiveColorByType(props.theme)[props.type]};
    opacity: 0;
    transform: translateX(-50%);
  }
  ${props =>
    props.active
      ? css`
          color: ${getTabActiveColorByType(props.theme)[props.type]};
          &:before {
            opacity: 1;
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
