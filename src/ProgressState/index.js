// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { white, orange600, gray700, gray500 } from '../Colors';
import { body2Gray } from '../TextStyles';

type Props = {
  values: Array<{
    label: string,
    active?: boolean,
  }>,
  color?: string,
  backgroundColor?: string,
  activeColor?: string,
  activeBackgroundColor?: string,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  background-color: ${props => props.backgroundColor || gray700};
  height: 32px;
`;

const Content = styled.div`
  ${body2Gray};
  display: flex;
  align-items: center;
  page-break-after: always;
  break-after: always;
  border-radius: 16px;
  flex: 1;
  justify-content: center;
  height: 100%;
  color: ${props => props.color || gray500};
  ${props => props.active && css`
    background-color: ${props => props.activeBackgroundColor || orange600};
    color: ${props => props.activeColor || white};
    font-weight: bold;
  `};
`;

const Chevron = styled.img.attrs({ src: 'https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-chevron-gray.png', alt: '>' })`
  width: 24px;
  height: 24px;
  margin: 0 12px;
`;

export default ({
  values,
  color,
  backgroundColor,
  activeBackgroundColor,
  activeColor,
  ...restProps
}: Props) => (
  <Container backgroundColor={ backgroundColor } { ...restProps }>
    {
      values.map((p, index) => (
        <Content
          key={ String(index) }
          active={ p.active || false }
          color={ color }
          activeBackgroundColor={ activeBackgroundColor }
          activeColor={ activeColor }
        >
          { p.label }
        </Content>
      )).reduce((prev, curr) => [prev, <Chevron />, curr])
    }
  </Container>
);
