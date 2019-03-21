import { isNil } from 'lodash-es';
import React, { HTMLAttributes, PureComponent } from 'react';
import styled from 'styled-components';

import { gray100, gray500, orange600 } from '../Colors';
import { caption1 } from '../TextStyles';
import TabItem from './TabItem';

interface Tabs {
  value: string | number;
  title: string;
  badge?: number;
}

interface Props {
  tabs: Tabs[];
  currentValue: string | number;
  color: string;
  activeColor: string;
  borderColor: string;
  activeBorderColor: string;
  className?: string;
  fluid?: boolean;
  onTabChange?: (value: string | number) => void;
  htmlDivAttributes?: HTMLAttributes<HTMLUListElement>;
}

export default class TabContainer extends PureComponent<Props> {
  public static defaultProps = {
    fluid: true,
    color: gray500,
    activeColor: orange600,
    borderColor: gray100,
    activeBorderColor: orange600,
  };

  public render() {
    const {
      className,
      tabs,
      currentValue,
      onTabChange,
      borderColor,
      color,
      activeColor,
      activeBorderColor,
      fluid,
      htmlDivAttributes,
    } = this.props;
    return (
      <TabList borderColor={borderColor} className={className} {...htmlDivAttributes}>
        {tabs.map(tab => (
          <TabItem
            key={tab.value}
            value={tab.value}
            className={`${className ? `${className}-item ` : ''}${tab.value === currentValue ? 'active' : ''}`}
            onTabChange={onTabChange}
            color={color}
            activeColor={activeColor}
            activeBorderColor={activeBorderColor}
            flexBasis={fluid ? 'auto' : `${100 / tabs.length}%`}
          >
            {tab.title}
            {!isNil(tab.badge) && (
              <Badge color={color} activeColor={activeColor}>
                {tab.badge}개
              </Badge>
            )}
          </TabItem>
        ))}
      </TabList>
    );
  }
}

const TabList = styled.ul<{ borderColor: string }>`
  display: flex;
  list-style: none;
  margin: 0;
  white-space: nowrap;
  overflow-x: auto;
  box-shadow: inset 0 -1px 0 0 ${props => props.borderColor};
`;

export interface BadgeProps {
  color: string;
  activeColor: string;
}
const Badge = styled.span<BadgeProps>`
  ${caption1};
  margin-left: 4px;
  color: ${props => props.color};
  .active & {
    color: ${props => props.activeColor};
  }
`;
