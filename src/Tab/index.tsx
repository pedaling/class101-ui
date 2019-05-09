import React, { HTMLAttributes, PureComponent, ReactNode } from 'react';
import styled from 'styled-components';

import { gray100, gray500, orange600 } from '../Colors';
import { caption1 } from '../TextStyles';
import TabItem from './TabItem';

interface Tabs {
  value: string | number;
  title: string;
  badge?: React.ReactNode;
}

interface Props {
  tabs: Tabs[];
  currentValue: string | number;
  color: string;
  activeColor: string;
  borderColor: string;
  activeBorderColor: string;
  fluid: boolean;
  className?: string;
  onTabChange?: (value: string | number) => void;
  divAttributes?: HTMLAttributes<HTMLDivElement>;
  children: ReactNode;
}

export default class Tab extends PureComponent<Props> {
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
      color,
      borderColor,
      activeColor,
      activeBorderColor,
      fluid,
      divAttributes,
      children,
    } = this.props;
    return (
      <div className={className} {...divAttributes}>
        <TabList borderColor={borderColor}>
          {tabs.map(tab => (
            <TabItem
              key={tab.value}
              value={tab.value}
              className={`${className ? `${className}-item ` : ''}${tab.value === currentValue ? 'active' : ''}`}
              onTabChange={onTabChange}
              color={color}
              activeColor={activeColor}
              activeBorderColor={activeBorderColor}
              tabCount={tabs.length}
              fluid={fluid}
            >
              {tab.title}
              {tab.badge && (
                <Badge color={color} activeColor={activeColor}>
                  {tab.badge}
                </Badge>
              )}
            </TabItem>
          ))}
        </TabList>
        {children}
      </div>
    );
  }
}

const TabList = styled.ul<{ borderColor: string }>`
  display: flex;
  list-style: none;
  margin: 0;
  width: 100%;
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
