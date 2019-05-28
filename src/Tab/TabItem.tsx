import React, { PureComponent, ReactNode } from 'react';
import styled from 'styled-components';

import { gray600 } from '../Colors';
import { body2 } from '../TextStyles';
import { TabStyleProps } from './interface';
import { getTabActiveColorByTheme } from './utils';

interface TabItemStyle extends TabStyleProps {
  tabCount: number;
  fluid: boolean;
}

interface TabItemProps extends TabItemStyle {
  value: string | number;
  className?: string;
  onTabChange?: (value: string | number) => void;
  children?: ReactNode;
}

export default class TabItem extends PureComponent<TabItemProps> {
  public render() {
    const { className, fluid, children, tabCount, theme, type } = this.props;

    return (
      <TabItemContainer
        theme={theme}
        type={type}
        className={className}
        onClick={this.handleOnTabChange}
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
  color: ${gray600};

  &:hover {
    cursor: pointer;
  }

  &.active {
    box-shadow: inset 0 -3px 0 0 ${props => getTabActiveColorByTheme(props.theme)[props.type]};
    font-weight: bold;
    color: ${props => getTabActiveColorByTheme(props.theme)[props.type]};
  }
`;
