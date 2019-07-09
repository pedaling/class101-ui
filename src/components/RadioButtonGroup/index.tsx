import { isEqual, pick } from 'lodash';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import RadioButton, { RadioButtonProps } from './RadioButton';

interface Props {
  children: React.ComponentElement<RadioButtonProps, RadioButton>;
  onChange: (value: string) => any;
  className?: string;
  value: string;
  stackingDirection: 'horizontal' | 'vertical';
}

interface State {
  checkedIndex: number;
}

export class RadioButtonGroup extends PureComponent<Props, State> {
  public static getDerivedStateFromProps(props: Props, state: State) {
    const { children, value } = props;

    if (value) {
      const index = React.Children.toArray<React.ComponentElement<RadioButtonProps, RadioButton>>(children).findIndex(
        c => isEqual(c.props.value, value)
      );
      if (state.checkedIndex !== index) {
        return { checkedIndex: index };
      }
    }
  }

  public state: State = { checkedIndex: 0 };

  public render() {
    const { stackingDirection, children, className, onChange, ...props } = this.props;

    return (
      <Container stackingDirection={stackingDirection} {...props}>
        {this.arrayOfChildren.map((child, i) => this.renderChild(child, i))}
      </Container>
    );
  }

  private get arrayOfChildren() {
    return React.Children.toArray<React.ComponentElement<RadioButtonProps, RadioButton>>(this.props.children);
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
    const { stackingDirection, children, ...restProps } = this.props;
    const { checkedIndex } = this.state;

    const checked = index === checkedIndex;

    return React.cloneElement(child, {
      ...child.props,
      index,
      checked,
      stackingDirection,
      key: index,
      onClick: this.handleClickItem,
      ...pick(restProps, 'textAlign', 'showDivider', 'showBorder', 'color', 'size'),
    });
  };
}

export { RadioButton, RadioButtonProps };

const Container = styled.div<{ stackingDirection: 'horizontal' | 'vertical' }>`
  display: flex;
  flex-direction: ${props => (props.stackingDirection === 'horizontal' ? 'row' : 'column')};
`;
