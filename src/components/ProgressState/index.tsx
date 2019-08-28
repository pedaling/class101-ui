import React from 'react';
import styled, { css } from 'styled-components';

import { gray500, gray700, orange600, white } from '../../core/Colors';
import { body2 } from '../../core/TextStyles';

export interface ProgressStateProps {
  value?: string;
  items?: {
    label?: string;
    value: string;
  }[];
  color?: string;
  backgroundColor?: string;
  activeColor?: string;
  activeBackgroundColor?: string;
}

export const ProgressState = ({
  value,
  items,
  color,
  backgroundColor,
  activeBackgroundColor,
  activeColor,
  ...restProps
}: ProgressStateProps) => (
  <Container backgroundColor={backgroundColor} {...restProps}>
    {items &&
      items
        .map((item, index) => (
          <Content
            key={String(index)}
            active={Boolean(value && String(value) === String(item.value))}
            color={color}
            activeBackgroundColor={activeBackgroundColor}
            activeColor={activeColor}
          >
            {item.label || item.value}
          </Content>
        ))
        .reduce((prev, curr) => (
          <>
            {prev}
            <Chevron />
            {curr}
          </>
        ))}
  </Container>
);

const Container = styled.div<ProgressStateProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  background-color: ${props => props.backgroundColor || gray700};
  height: 32px;
`;

const Content = styled.div<ProgressStateProps & { active?: boolean }>`
  ${body2};
  display: flex;
  align-items: center;
  page-break-after: always;
  break-after: always;
  border-radius: 16px;
  flex: 1;
  justify-content: center;
  height: 100%;
  color: ${props => props.color || gray500};
  ${props =>
    props.active &&
    css<ProgressStateProps>`
      background-color: ${props => props.activeBackgroundColor || orange600};
      color: ${props => props.activeColor || white};
      font-weight: bold;
    `};
`;

const Chevron = styled.img.attrs({
  src: 'https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-chevron-gray.png',
  alt: '>',
})`
  width: 24px;
  height: 24px;
  margin: 0 12px;
`;
