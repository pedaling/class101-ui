import { isEqual, pick } from 'lodash';
import React, { isValidElement, PureComponent } from 'react';
import styled from 'styled-components';

import { RadioButton, RadioButtonContainerProps, RadioButtonProps } from './RadioButton';

export interface RadioButtonGroupProps extends RadioButtonContainerProps {
  children: JSX.Element[];
  onChange: (value: string) => any;
  className?: string;
  value: string;
  stackingDirection: 'horizontal' | 'vertical';
}

interface State {
  checkedIndex: number;
}

export class RadioButtonGroup extends PureComponent<RadioButtonGroupProps, State> {
  public static getDerivedStateFromProps(props: RadioButtonGroupProps, state: State) {
    const { children, value } = props;

    if (value) {
      const index = React.Children.toArray(children).findIndex(c => {
        if (isValidElement(c)) {
          return isEqual(c.props.value, value);
        }
        return false;
      });

      if (state.checkedIndex !== index) {
        return { checkedIndex: index };
      }
    }

    return null;
  }

  public state: State = { checkedIndex: 0 };

  public render() {
    const { stackingDirection, onChange, ...props } = this.props;

    return (
      <Container stackingDirection={stackingDirection} {...props}>
        {this.arrayOfChildren.map((child, i) => this.renderChild(child, i))}
      </Container>
    );
  }

  private get arrayOfChildren() {
    return React.Children.toArray(this.props.children).filter(children =>
      isValidElement(children)
    ) as React.ComponentElement<RadioButtonProps, RadioButton>[];
  }

  private handleClickItem = (index: number) => {
    const { onChange } = this.props;
    const child = this.arrayOfChildren[index];

    this.setState({ checkedIndex: index });

    if (onChange) {
      onChange(child ? child.props.value : '');
    }
  };

  private renderChild = (child: React.ComponentElement<RadioButtonProps, RadioButton>, index: number) => {
    const { stackingDirection, ...restProps } = this.props;
    const { checkedIndex } = this.state;

    const checked = index === checkedIndex;

    const injectProps = pick<RadioButtonContainerProps>(
      restProps,
      'textAlign',
      'showDivider',
      'showBorder',
      'color',
      'size'
    );

    return React.cloneElement(child, {
      ...child.props,
      index,
      checked,
      stackingDirection,
      key: index,
      onClick: this.handleClickItem,
      ...injectProps,
    });
  };
}

export { RadioButton, RadioButtonProps };

const Container = styled.div<{ stackingDirection: 'horizontal' | 'vertical' }>`
  display: flex;
  flex-direction: ${props => (props.stackingDirection === 'horizontal' ? 'row' : 'column')};
`;
