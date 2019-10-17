import React from 'react';

export interface SlideProps {
  className?: string;
  children?: React.ReactNode;
}

export const Slide = (props: SlideProps) => {
  return <div className={`swiper-slide ${props.className}`}>{props.children}</div>;
};
