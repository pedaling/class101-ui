// @flow
import React from 'react';
import styled from 'styled-components';
import { orange600, gray600 } from '../Colors';

type Props = {
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  color: ${props => (props.active ? orange600 : gray600)};
  page-break-after: always;
  break-after: always;
`;

const Flex = styled.div`
  flex: 1;
  text-align: center;
`;

const Chevron = styled.img.attrs({ src: 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png', alt: '>' })`
  width: 12px;
  height: 12px;
`;

export default ({ ...restProps }: Props) => (
  <Container { ...restProps }>
    <Content>결제 완료</Content>
    <Flex>
      <Chevron />
    </Flex>
    <Content active>상품 준비 중</Content>
    <Flex>
      <Chevron />
    </Flex>
    <Content>배송 중</Content>
    <Flex>
      <Chevron />
    </Flex>
    <Content>배송 완료</Content>
  </Container>
);
