import React, { HTMLAttributes, PureComponent, ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';

import { gray600 } from '../Colors';
import { caption1 } from '../TextStyles';
import Theme from '../Theme';
import { TabStyleProps } from './interface';
import TabItem from './TabItem';
import { getTabActiveColorByTheme, getTabBorderColorByTheme } from './utils';

interface Tabs {
  value: string | number;
  title: string;
  badge?: React.ReactNode;
}

interface TabProps extends TabStyleProps {
  tabs: Tabs[];
  currentValue: string | number;
  fluid: boolean;
  className?: string;
  onTabChange?: (value: string | number) => void;
  divAttributes?: HTMLAttributes<HTMLDivElement>;
  children?: ReactNode;
}

class Tab extends PureComponent<TabProps> {
  public static defaultProps = {
    fluid: true,
    type: 'default',
    theme: Theme.light,
  };

  public render() {
    const { className, tabs, type, theme, currentValue, onTabChange, fluid, divAttributes, children } = this.props;
    return (
      <div className={className} {...divAttributes}>
        <TabList type={type} theme={theme}>
          {tabs.map(tab => (
            <TabItem
              key={tab.value}
              value={tab.value}
              className={`${className ? `${className}-item ` : ''}${tab.value === currentValue ? 'active' : ''}`}
              onTabChange={onTabChange}
              type={type}
              theme={theme}
              tabCount={tabs.length}
              fluid={fluid}
            >
              {tab.title}
              {tab.badge && (
                <Badge type={type} theme={theme}>
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

export default withTheme(Tab);

const TabList = styled.ul<TabStyleProps>`
  display: flex;
  list-style: none;
  margin: 0;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  box-shadow: inset 0 -1px 0 0 ${props => getTabBorderColorByTheme(props.theme)};
`;

const Badge = styled.span<TabStyleProps>`
  ${caption1};
  margin-left: 4px;
  color: ${gray600};
  .active & {
    color: ${props => getTabActiveColorByTheme(props.theme)[props.type]};
  }
`;
