import React from 'react';
// @ts-ignore
import { GridList, Body1, Caption1 } from '@class101/ui';
import { imageSrc } from '../components/interface';

export function LongContent() {
  return (
    <GridList
      items={[
        {
          id: 1,
          title: '질문에 칼답 클래스 기획전',
          image: imageSrc,
          productState: '바로 수강 가능',
          discount: '10',
        },
        {
          id: 2,
          title: '질문에 칼답 클래스 기획전',
          image: imageSrc,
          productState: '바로 수강 가능',
          discount: '20',
        },
        {
          id: 3,
          title: '질문에 칼답 클래스 기획전 질문에 칼답 클래스 기획전',
          image: imageSrc,
          productState: '바로 수강 가능',
          discount: '30',
        },
        {
          id: 4,
          title: '질문에 칼답 클래스 기획전',
          image: imageSrc,
          productState: '바로 수강 가능',
          discount: '40',
        },
        {
          id: 5,
          title: '질문에 칼답 클래스 기획전 질문에 칼답 클래스 기획전',
          image: imageSrc,
          productState: '바로 수강 가능',
          discount: '40',
        },
        {
          id: 6,
          title: '질문에 칼답 클래스 기획전 질문에',
          image: imageSrc,
          productState: '바로 수강 가능',
          discount: '40',
        },
      ]}
      smColumn={1}
      renderItem={item => {
        const { title, image, productState, discount } = item;
        return (
          <div>
            <div>
              <img style={{ width: '100%' }} src={image} alt={title} />
            </div>
            <Body1>{title}</Body1>
            <Caption1>{productState}</Caption1>
            <Caption1 fontWeight="Bold" color="orange">
              {discount}% 할인
            </Caption1>
          </div>
        );
      }}
    />
  );
}
