import React, {
  Children, cloneElement, useState,
} from 'react';
import styled from 'styled-components';

import { RadioButtonContainerProps } from './RadioButton';

export type RadioButtonGroupProps = RadioButtonContainerProps & {
  children?: JSX.Element[];
  onChange: (value: string) => void;
  className?: string;
  value?: string;
  stackingDirection: 'horizontal' | 'vertical';
};

export const RadioButtonGroup = ({
  children,
  value,
  stackingDirection,
  onChange,
  ...restProps
}: RadioButtonGroupProps): JSX.Element => {
  const [checkedIndex, setCheckedIndex] = useState(() => {
    if (value) {
      const mappedValues = Children.map(children, (c) => c?.props.value) || [];
      const corresIndex = mappedValues.findIndex((mappedValue) => mappedValue === value);
      return corresIndex;
    }
    return 0;
  });

  const handleClickItem = (index: number) => () => {
    const child = children?.[index];
    setCheckedIndex(index);
    if (onChange) {
      onChange(child ? child.props.value : '');
    }
  };

  const renderChild = (child: JSX.Element, index: number) => {
    const checked = index === checkedIndex;
    const {
      textAlign, showDivider, showBorder, color,
    } = restProps;
    const injectProps = {
      textAlign,
      showDivider,
      showBorder,
      color,
    };

    return cloneElement(child, {
      ...child.props,
      index,
      checked,
      stackingDirection,
      key: index,
      onClick: handleClickItem(index),
      ...injectProps,
    });
  };
  return (
    <Container stackingDirection={stackingDirection} {...restProps}>
      {children?.map((child, i) => renderChild(child, i))}
    </Container>
  );
};

const Container = styled.div<{ stackingDirection: 'horizontal' | 'vertical' }>`
  display: flex;
  flex-direction: ${(props) => (props.stackingDirection === 'horizontal' ? 'row' : 'column')};
`;
