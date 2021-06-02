import {
  Children, cloneElement, isValidElement, memo, useEffect, useState,
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

export const RadioButtonGroup = memo<RadioButtonGroupProps>(
  ({
    children, value, stackingDirection, onChange, ...restProps
  }: RadioButtonGroupProps) => {
    const [checkedIndex, setCheckedIndex] = useState(0);
    useEffect(() => {
      if (value) {
        const index = Children.toArray(children).findIndex((c) => {
          if (isValidElement(c)) {
            return c.props.value === value;
          }
          return false;
        });
        if (checkedIndex !== index) {
          setCheckedIndex(index);
        }
      }
      setCheckedIndex(0);
    }, [checkedIndex, children, value]);

    const arrayOfChildren = children?.filter((c) => isValidElement(c)) || [];

    const handleClickItem = (index: number) => {
      const child = arrayOfChildren[index];

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
        onClick: handleClickItem,
        ...injectProps,
      });
    };
    return (
      <Container stackingDirection={stackingDirection} {...restProps}>
        {arrayOfChildren.map((child, i) => renderChild(child, i))}
      </Container>
    );
  },
);

const Container = styled.div<{ stackingDirection: 'horizontal' | 'vertical' }>`
  display: flex;
  flex-direction: ${(props) => (props.stackingDirection === 'horizontal' ? 'row' : 'column')};
`;
