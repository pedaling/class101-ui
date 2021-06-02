import React, { ReactNode } from 'react';
import { SwiperSlide } from 'swiper/react';

type SlideProps = {
  className?: string;
  children?: ReactNode;
};

const Slide = ({ className, children }: SlideProps): JSX.Element => (
  <SwiperSlide className={className}>{children}</SwiperSlide>
);

Slide.displayName = 'SwiperSlide';

export default Slide;
