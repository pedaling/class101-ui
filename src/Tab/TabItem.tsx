import React, { PureComponent, ReactNode } from 'react';
import styled from 'styled-components';

import { body2 } from '../TextStyles';

interface TabItemStyle {
  color: string;
  activeColor: string;
  activeBorderColor: string;
  tabCount: number;
  fluid: boolean;
}
export interface TabItemProps extends TabItemStyle {
  value: string | number;
  className?: string;
  onTabChange?: (value: string | number) => void;
  children: ReactNode;
}

export default class TabItem extends PureComponent<TabItemProps> {
  public render() {
    const { className, fluid, children, tabCount, color, activeColor, activeBorderColor } = this.props;

    return (
      <TabItemContainer
        className={className}
        onClick={this.handleOnTabChange}
        color={color}
        activeColor={activeColor}
        activeBorderColor={activeBorderColor}
        tabCount={tabCount}
        fluid={fluid}
      >
        {children}
      </TabItemContainer>
    );
  }
  private handleOnTabChange = () => {
    const { value, onTabChange } = this.props;
    if (onTabChange) {
      return onTabChange(value);
    }
  };
}

const TabItemContainer = styled.li<TabItemStyle>`
  ${body2};
  display: flex;
  flex-basis: ${props => (props.fluid ? 'auto' : `${100 / props.tabCount}%`)};
  align-items: center;
  justify-content: center;
  padding: 0 4px 13px 4px;
  margin-right: ${props => (props.fluid ? '26px' : 0)};
  color: ${props => props.color};

  &:hover {
    cursor: pointer;
  }

  &.active {
    box-shadow: inset 0 -3px 0 0 ${props => props.activeBorderColor};
    font-weight: bold;
    color: ${props => props.activeColor};
  }
`;
