import React, { cloneElement, PureComponent, ReactNode } from 'react';
import styled, { withTheme } from 'styled-components';

import Theme from '../Theme';
import TabItem, { TabItemProps, TabStyleProps } from './TabItem';
import { getTabBorderColor } from './utils';

type TabElement = React.ReactElement<TabItemProps>;

export interface Props<T> extends TabStyleProps {
  onChange: (value: T) => any;
  value: T;
  fluid: boolean;
  className?: string;
}

export class Tabs<T extends string = string> extends PureComponent<Props<T>> {
  public static Item = TabItem;
  public static defaultProps = {
    fluid: true,
    type: 'default',
    theme: Theme.light,
  };

  public render() {
    const { value, fluid, theme, type, onChange, children, ...restProps } = this.props;

    const indicatorCount = React.Children.count(children);
    const tabIndicators: TabElement[] = [];
    let activePanel: ReactNode;

    React.Children.forEach(this.props.children, child => {
      const tab = child as TabElement;
      tabIndicators.push(cloneElement(tab, {
        type,
        theme,
        fluid,
        indicatorCount,
        key: tab.props.value,
        active: value === tab.props.value,
        onClickItem: this.handleClickTabItem,
      }) as TabElement);

      if (value === tab.props.value) {
        activePanel = tab.props.panel;
      }
    });

    return (
      <>
        <TabList theme={theme} type={type} {...restProps}>
          {tabIndicators}
        </TabList>
        {activePanel}
      </>
    );
  }

  private handleClickTabItem = (value: string) => {
    const { onChange, value: currentValue } = this.props;
    onChange(value as T);
    if (currentValue === undefined) {
      throw new Error('이 컴포넌트는 controlled 하게만 사용 가능합니다.');
    }
  };
}

export default withTheme(Tabs);

const TabList = styled.div<TabStyleProps>`
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
  box-shadow: inset 0 -1px 0 0 ${props => getTabBorderColor(props.theme)};
`;
